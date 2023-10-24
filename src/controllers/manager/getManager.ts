import { Manager } from "../../entities/Manager";

const getManager = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  Manager.findOneBy({ id })
    .then((manager) => {
      if (!manager) {
        res
          .status(404)
          .json({ msg: "The manager id you entered does not exist." });
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

export default getManager;
