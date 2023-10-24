import { Manager } from "../../entities/Manager";

const addManager = async (req: any, res: any) => {
  const { userName, password, firstName, lastName, address, phone, email } =
    req.body;

  if (
    !userName ||
    !password ||
    !firstName ||
    !lastName ||
    !address ||
    !phone ||
    !email
  ) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  const managerByUserName = await Manager.findOneBy({
    userName: userName,
  });

  const managerByEmail = await Manager.findOneBy({
    email: email,
  });

  if (!managerByUserName && !managerByEmail) {
    try {
      const manager = Manager.create({
        userName,
        password,
        firstName,
        lastName,
        address,
        phone,
        email,
      });
      await manager.save();
      res.status(201).json({ msg: "Manager was successfully created." });
    } catch (err) {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    }
  } else if (managerByUserName) {
    res.status(400).json({ msg: "Manager with this username already exist." });
    return;
  } else if (managerByEmail) {
    res.status(400).json({ msg: "Manager with this email already exist." });
  }
};

export default addManager;
