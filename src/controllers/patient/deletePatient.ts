import { Patient } from "../../entities/Patient";

const deletePatient = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  Patient.delete(id)
    .then((data) => {
      if (data.affected === 0) {
        res
          .status(400)
          .json({ msg: "The patient id you entered does not exist." });
        return;
      } else {
        res.status(200).json({ msg: "Patient was successfully deleted." });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default deletePatient;
