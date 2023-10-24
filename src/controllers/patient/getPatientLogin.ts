import { Patient } from "../../entities/Patient";

const getPatientLogin = async (req: any, res: any) => {
  const { password, userName } = req.body;

  if (!userName || !password) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }
  Patient.findOne({
    where: { password: password, userName: userName },
  })
    .then((patient) => {
      if (!patient) {
        res.status(404).json({ msg: "Patient does not exist." });
        return;
      } else {
        res.status(200).json({ patient: patient });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getPatientLogin;
