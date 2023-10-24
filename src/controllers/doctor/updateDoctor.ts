import { Doctor } from "../../entities/Doctor";

const updateDoctor = async (req: any, res: any) => {
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

  const doctorById = await Doctor.findOneBy({
    id: id,
  });

  const doctorByUserName = await Doctor.findOneBy({
    userName: userName,
  });

  const doctorByEmail = await Doctor.findOneBy({
    email: email,
  });

  const doctorByLicenceNumber = await Doctor.findOneBy({
    licenceNumber: licenceNumber,
  });

  if (!doctorById) {
    res.status(400).json({ msg: "The doctor id you entered does not exist." });
    return;
  } else if (doctorByUserName && doctorByUserName.id !== id) {
    res.status(400).json({ msg: "Doctor with this username already exists." });
    return;
  } else if (doctorByEmail && doctorByEmail.id !== id) {
    res.status(400).json({ msg: "Doctor with this email already exists." });
    return;
  } else if (doctorByLicenceNumber && doctorByLicenceNumber.id !== id) {
    res
      .status(400)
      .json({ msg: "Doctor with this licence number already exists." });
    return;
  } else {
    Doctor.update(id, {
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
    })
      .then(() => {
        res.status(200).json({ msg: "Doctor was successfully updated." });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ msg: "Something went wrong. Please try again later." });
        console.log("err", err);
      });
  }
};

export default updateDoctor;
