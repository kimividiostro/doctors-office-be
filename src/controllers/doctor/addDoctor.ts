import { Doctor } from "../../entities/Doctor";

const addDoctor = async (req: any, res: any) => {
  const {
    userName,
    password,
    firstName,
    lastName,
    address,
    phone,
    email,
    profilePic,
    licenceNumber,
    specialization,
    officeDepartment,
  } = req.body;

  if (
    !userName ||
    !password ||
    !firstName ||
    !lastName ||
    !address ||
    !phone ||
    !email ||
    !profilePic ||
    !licenceNumber ||
    !specialization ||
    !officeDepartment
  ) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  const doctorByUserName = await Doctor.findOneBy({
    userName: userName,
  });

  const doctorByEmail = await Doctor.findOneBy({
    email: email,
  });

  const doctorByLicenceNumber = await Doctor.findOneBy({
    licenceNumber: licenceNumber,
  });

  if (!doctorByEmail && !doctorByUserName && !doctorByLicenceNumber) {
    try {
      const doctor = Doctor.create({
        userName,
        password,
        firstName,
        lastName,
        address,
        phone,
        email,
        profilePic,
        licenceNumber,
        specialization,
        officeDepartment,
      });
      await doctor.save();
      res.status(201).json({ msg: "Doctor was successfully created." });
    } catch (err) {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    }
  } else if (doctorByUserName) {
    res.status(400).json({ msg: "Doctor with this username already exists." });
    return;
  } else if (doctorByEmail) {
    res.status(400).json({ msg: "Doctor with this email address already exists." });
  } else if (doctorByLicenceNumber) {
    res
      .status(400)
      .json({ msg: "Doctor with this licence number already exists." });
  }
};

export default addDoctor;
