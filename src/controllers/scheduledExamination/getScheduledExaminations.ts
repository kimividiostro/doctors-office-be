import { ScheduledExamination } from "../../entities/ScheduledExamination";

const getScheduledExaminations = async (req: any, res: any) => {
  ScheduledExamination.find({
    relations: [
      "patient",
      "examination",
      "examination.doctor",
      "examination.doctor.specialization",
      "examination.examinationType",
      "examination.examinationType.specialization",
    ],
  })
    .then((scheduledExaminations) => {
      res.status(200).json({ scheduledExaminations: scheduledExaminations });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getScheduledExaminations;
