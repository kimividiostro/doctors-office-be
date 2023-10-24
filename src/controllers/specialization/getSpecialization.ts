import { Specialization } from "../../entities/Specialization";

const getSpecialization = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  Specialization.findOneBy({
    id: id,
  })
    .then((specialization) => {
      if (!specialization) {
        res
          .status(404)
          .json({ msg: "The specialization id you entered does not exist." });
        return;
      } else {
        res.status(200).json({ specialization: specialization });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getSpecialization;
