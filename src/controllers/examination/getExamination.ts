import { Examination } from "../../entities/Examination";

const getExamination = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  Examination.findOne({
    where: { id },
    relations: ["doctor", "doctor.specialization"],
  })
    .then((examination) => {
      if (!examination) {
        res
          .status(404)
          .json({ msg: "The examination id you entered does not exist." });
        return;
      } else {
        res.status(200).json({ examination: examination });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getExamination;
