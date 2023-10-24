import { Specialization } from "../../entities/Specialization";

const getSpecializations = async (req: any, res: any) => {
  Specialization.find()
    .then((specializations) => {
      res.status(200).json({ specializations: specializations });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getSpecializations;
