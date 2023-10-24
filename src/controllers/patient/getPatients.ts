import { Patient } from "../../entities/Patient";

const getPatients = async (req: any, res: any) => {
  Patient.find()
    .then((patients) => {
      res.status(200).json(patients);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getPatients;
