import { Report } from "../../entities/Report";

const getReports = async (req: any, res: any) => {
  Report.find({
    relations: [
      "scheduledExamination",
      "scheduledExamination.patient",
      "scheduledExamination.examination",
      "scheduledExamination.examination.doctor.specialization",
      "scheduledExamination.examination.examinationType",
      "scheduledExamination.examination.examinationType.specialization",
    ],
  })
    .then((reports) => {
      res.status(200).json({ reports: reports });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getReports;
