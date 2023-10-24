import { Doctor } from "../../entities/Doctor";

const getDoctors = async (req: any, res: any) => {
  Doctor.find({
    relations: ["specialization"],
  })
    .then((doctors) => {
      res.status(200).json({ doctors: doctors });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getDoctors;
