import { Patient } from "../../entities/Patient";

const addPatient = async (req: any, res: any) => {
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

  try {
    const patient = Patient.create({
      userName,
      password,
      firstName,
      lastName,
      address,
      phone,
      email,
      profilePic,
    });
    await patient.save();
    res.status(201).json({ msg: "Patient was successfully created." });
  } catch (err) {
    if(err.driverError.detail.includes("already exists")) {
      if(err.driverError.detail.includes("userName")){
        return res.status(400).json({msg: "Please use a different username."});
      }
      if(err.driverError.detail.includes("email")){
        return res.status(400).json({msg: "Please use a different email."});
      }
    }
    return res.status(500).json(err);
  }
};

export default addPatient;
