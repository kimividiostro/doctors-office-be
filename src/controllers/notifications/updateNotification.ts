import { Notification } from "../../entities/Notification";

const updateNotification = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const { message, patient, read } = req.body;

  if (!message || !patient || !read) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  const notificationById = await Notification.findOneBy({
    id: id,
  });

  if (!notificationById) {
    res
      .status(400)
      .json({ msg: "The notification id you entered does not exist." });
    return;
  } else {
    Notification.update(id, {
      message,
      patient,
      read,
    })
      .then(() => {
        res.status(200).json({ msg: "Notification was successfully updated." });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ msg: "Something went wrong. Please try again later." });
        console.log("err", err);
      });
  }
};

export default updateNotification;
