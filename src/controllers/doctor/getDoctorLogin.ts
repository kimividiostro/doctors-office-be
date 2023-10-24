import { Doctor } from "../../entities/Doctor";

const getDoctorLogin = async (req: any, res: any) => {
  const { password, userName } = req.body;

  if (!userName || !password) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  Doctor.findOne({
    where: { password, userName },
    relations: ["specialization"],
  })
    .then((doctor) => {
      if (!doctor) {
        res.status(404).json({ msg: "Doctor does not exist." });
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

export default getDoctorLogin;
