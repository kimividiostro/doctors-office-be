import { Report } from "../../entities/Report";

const updateReport = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const {
    scheduledExamination,
    doctor,
    patient,
    diagnosis,
    therapy,
    controlDate,
    controlTime,
  } = req.body;

  if (
    !scheduledExamination ||
    !doctor ||
    !patient ||
    !diagnosis ||
    !therapy ||
    !controlDate ||
    !controlTime
  ) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  const reportById = await Report.findOneBy({
    id: id,
  });

  if (!reportById) {
    res.status(400).json({ msg: "The report id you entered does not exist." });
    return;
  } else {
    Report.update(id, {
      scheduledExamination,
      diagnosis,
      therapy,
      controlDate,
      controlTime,
    })
      .then(() => {
        res.status(200).json({ msg: "Report was successfully updated." });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ msg: "Something went wrong. Please try again later." });
        console.log("err", err);
      });
  }
};

export default updateReport;
