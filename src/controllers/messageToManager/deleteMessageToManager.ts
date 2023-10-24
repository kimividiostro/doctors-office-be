import { MessageToManager } from "../../entities/MessageToManager";

const deleteMessageToManager = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  MessageToManager.delete(id)
    .then((data) => {
      if (data.affected === 0) {
        res.status(400).json({
          msg: "The message to manager id you entered does not exist.",
        });
        return;
      } else {
        res
          .status(200)
          .json({ msg: "Message to manager was successfully deleted." });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default deleteMessageToManager;
