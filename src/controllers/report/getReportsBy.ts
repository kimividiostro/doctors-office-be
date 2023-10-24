import { Report } from "../../entities/Report";

const getReportsBy = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const path = req.route.path.split("/");
  const type = path[2];

  Report.createQueryBuilder('report')
  .innerJoinAndSelect('report.scheduledExamination', 'se')
  .innerJoinAndSelect('se.patient', 'patient')
  .innerJoinAndSelect('se.examination', 'examination')
  .innerJoinAndSelect('se.doctor', 'doctor')
  .innerJoinAndSelect('doctor.specialization', 'specialization')
  .orderBy('se.date', 'DESC')
  .addOrderBy('se.startTime', 'DESC')
  .getMany()
    .then((reports) => {
      const filteredReports: Report[] = [];
      reports.forEach((report: any) => {
        if (type === "patient") {
          if (report.scheduledExamination.patient.id === id) {
            filteredReports.push(report);
          }
        } else if (type === "doctor") {
          if (report.scheduledExamination.doctor.id === id) {
            filteredReports.push(report);
          }
        }
      });
      if (filteredReports.length === 0) {
        res.status(200).json({ msg: "You don't have any reports." });
      } else {
        res.status(200).json({ reports: filteredReports });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getReportsBy;
