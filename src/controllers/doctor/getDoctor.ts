import { Doctor } from "../../entities/Doctor";

const getDoctor = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  Doctor.findOne({
    where: { id },
    relations: ["specialization"],
  })
    .then((doctor) => {
      if (!doctor) {
        res
          .status(404)
          .json({ msg: "The doctor id you entered does not exist." });
        return;
      } else {
        res.status(200).json({ doctor: doctor });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getDoctor;
