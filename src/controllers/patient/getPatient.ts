import { Patient } from "../../entities/Patient";

const getPatient = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  Patient.findOneBy({
    id: id,
  })
    .then((patient) => {
      if (!patient) {
        res
          .status(404)
          .json({ msg: "The patient id you entered does not exist." });
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

export default getPatient;
