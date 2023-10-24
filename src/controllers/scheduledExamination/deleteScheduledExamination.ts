import { ScheduledExamination } from "../../entities/ScheduledExamination";

const deleteScheduledExamination = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  ScheduledExamination.delete(id)
    .then((data) => {
      if (data.affected === 0) {
        res.status(400).json({
          msg: "The scheduled examination id you entered does not exist.",
        });
        return;
      } else {
        res
          .status(200)
          .json({ msg: "Scheduled examination was successfully deleted." });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default deleteScheduledExamination;
