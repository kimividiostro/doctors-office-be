import { Report } from "../../entities/Report";
import { ScheduledExamination } from "../../entities/ScheduledExamination";

const getScheduledExaminationsBy = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const path = req.route.path.split("/");
  const type = path[2];

  try {const scheduledExaminations = await ScheduledExamination.find({
    relations: [
      "patient",
      "examination",
      "doctor",
      // "report"
    ],
    order: {date: 'ASC', startTime: 'ASC'}
  })
  const filteredScheduledExaminations: ScheduledExamination[] = [];
  for (const scheduledExamination of scheduledExaminations) {
    const report = await Report.findOne({where: { scheduledExamination: { id: scheduledExamination.id} }})
    if(report) {
      scheduledExamination.report = report
    }
    if (type === "patient") {
      if (scheduledExamination.patient.id === id) {
        filteredScheduledExaminations.push(scheduledExamination);
      }
    } else if (type === "doctor") {
      if (scheduledExamination.doctor.id === id) {
        filteredScheduledExaminations.push(scheduledExamination);
      }
    }
  }

  if (filteredScheduledExaminations.length === 0) {
    res
      .status(200)
      .json({ msg: "You don't have any scheduled examination." });
  } else {
    res.status(200).json({
      filteredScheduledExaminations: filteredScheduledExaminations,
    });
  }}

    catch(err) {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    }
    
};

export default getScheduledExaminationsBy;
