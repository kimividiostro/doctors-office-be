import { Patient } from "../../entities/Patient";

const updatePatient = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const {
    userName,
    password,
    firstName,
    lastName,
    address,
    phone,
    email,
    profilePic,
  } = req.body;

  if (
    !userName ||
    !password ||
    !firstName ||
    !lastName ||
    !address ||
    !phone ||
    !email ||
    !profilePic
  ) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  const patientById = await Patient.findOneBy({
    id: id,
  });

  const patientByUserName = await Patient.findOneBy({
    userName: userName,
  });

  const patientByEmail = await Patient.findOneBy({
    email: email,
  });

  if (!patientById) {
    res.status(400).json({ msg: "The patient id you entered does not exist." });
    return;
  } else if (patientByUserName && patientByUserName.id !== id) {
    res.status(400).json({ msg: "Patient with this username already exist." });
    return;
  } else if (patientByEmail && patientByEmail.id !== id) {
    res.status(400).json({ msg: "Patient with this email already exist." });
    return;
  } else {
    Patient.update(id, {
      userName,
      password,
      firstName,
      lastName,
      address,
      phone,
      email,
      profilePic,
    })
      .then(() => {
        res.status(200).json({ msg: "Patient was successfully updated." });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ msg: "Something went wrong. Please try again later." });
        console.log("err", err);
      });
  }
};

export default updatePatient;
