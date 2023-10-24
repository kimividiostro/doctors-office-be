import { Notification } from "../../entities/Notification";

const getNotification = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  Notification.findOne({
    where: { id },
    relations: ["patient"],
  })
    .then((notification) => {
      if (!notification) {
        res
          .status(404)
          .json({ msg: "The notification id you entered does not exist." });
        return;
      } else {
        res.status(200).json({ notification: notification });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getNotification;
