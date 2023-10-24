import { Notification } from "../../entities/Notification";

const addNotification = async (req: any, res: any) => {
  const { message, patient } = req.body;

  if (!message || !patient) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  try {
    const notification = Notification.create({
      message,
      patient,
    });
    await notification.save();
    res.status(201).json({ msg: "Notification was successfully created." });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
    console.log("err", err);
  }
};

export default addNotification;
