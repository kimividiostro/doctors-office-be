import { MessageToManager } from "../../entities/MessageToManager";

const getMessageToManager = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  MessageToManager.findOne({
    where: { id },
    relations: ["doctor"],
  })
    .then((messageToManager) => {
      if (!messageToManager) {
        res
          .status(404)
          .json({ msg: "Message to manager id you entered does not exist." });
        return;
      } else {
        res.status(200).json({ messageToManager: messageToManager });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getMessageToManager;
