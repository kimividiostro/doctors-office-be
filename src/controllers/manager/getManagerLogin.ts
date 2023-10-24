import { Manager } from "../../entities/Manager";

const getManagerLogin = async (req: any, res: any) => {
  const { password, userName } = req.body;

  if (!userName || !password) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  Manager.findOne({
    where: { password, userName },
  })
    .then((manager) => {
      if (!manager) {
        res.status(404).json({ msg: "Manager does not exist." });
        return;
      } else {
        res.status(200).json({ manager: manager });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getManagerLogin;
