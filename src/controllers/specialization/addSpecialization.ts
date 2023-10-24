import { Specialization } from "../../entities/Specialization";

const addSpecialization = async (req: any, res: any) => {
  const { type } = req.body;

  if (!type || type === "") {
    res.status(400).json({ msg: "Please enter the specialization." });
    return;
  }

  try {
    const specialization = Specialization.create({
      type,
    });
    await specialization.save();
    res.status(201).json({ msg: "Specialization was successfully created." });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
    console.log("err", err);
  }
};

export default addSpecialization;
