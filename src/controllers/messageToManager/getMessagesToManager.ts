import { MessageToManager } from "../../entities/MessageToManager";

const getMessagesToManager = async (req: any, res: any) => {
  MessageToManager.find({
    relations: ["doctor"],
  })
    .then((messageToManager) => {
      res.status(200).json({ messageToManager: messageToManager });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getMessagesToManager;
