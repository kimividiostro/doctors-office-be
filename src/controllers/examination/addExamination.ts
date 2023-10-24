import { Examination } from "../../entities/Examination";

const addExamination = async (req: any, res: any) => {
  const { durationInMinutes, type, price, specialization } = req.body;

  if (!type || !price || !specialization) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  try {
    const examination = Examination.create({
      durationInMinutes,
      type,
      price,
      specialization
    });
    await examination.save();
    res.status(201).json({ msg: "Examination was successfully created." });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
    console.log("err", err);
  }
};

export default addExamination;
