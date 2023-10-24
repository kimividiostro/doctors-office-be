import { MessageToManager } from "../../entities/MessageToManager";

const addMessageToManager = async (req: any, res: any) => {
  const { message, doctor } = req.body;

  if (!message || !doctor) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  try {
    const messageToManager = MessageToManager.create({
      message,
      doctor,
    });
    await messageToManager.save();
    res
      .status(201)
      .json({ msg: "Message to manager was successfully created." });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
    console.log("err", err);
  }
};

export default addMessageToManager;
