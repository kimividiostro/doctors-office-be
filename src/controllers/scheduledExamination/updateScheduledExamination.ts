import { ScheduledExamination } from "../../entities/ScheduledExamination";

const updateScheduledExamination = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const { reasonForComing, time, date, price, patient, examination } =
    req.body;

  if (
    !reasonForComing ||
    !time ||
    !date ||
    !price ||
    !patient ||
    !examination
  ) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  const scheduledExaminationById = await ScheduledExamination.findOneBy({
    id: id,
  });

  if (!scheduledExaminationById) {
    res.status(400).json({
      msg: "The scheduled examination id you entered does not exist.",
    });
    return;
  } else {
    ScheduledExamination.update(id, {
      reasonForComing,
      startTime: time,
      date,
      patient,
      examination,
    })
      .then(() => {
        res
          .status(200)
          .json({ msg: "Scheduled examination was successfully updated." });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ msg: "Something went wrong. Please try again later." });
        console.log("err", err);
      });
  }
};

export default updateScheduledExamination;
