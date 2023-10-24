import { ScheduledExamination } from "../../entities/ScheduledExamination";

const addScheduledExamination = async (req: any, res: any) => {
  const { reasonForComing, startTime, endTime, date, patient, doctor, examination } = req.body;

  if (
    !reasonForComing ||
    !startTime ||
    !endTime ||
    !date ||
    !patient ||
    !doctor ||
    !examination
  ) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  try {
    const overlappingExaminations = await ScheduledExamination.createQueryBuilder('se')
    .innerJoin('se.examination', 'ex')
    .where('ex.isPendingApproval = :isPendingApproval', { isPendingApproval: false })
    .andWhere('se.doctor.id = :doctor', { doctor })
    .andWhere('se.date = :date', { date })
    .andWhere('se.startTime <= :endTime AND se.endTime >= :startTime', { startTime, endTime })
    .getMany();
    if(overlappingExaminations.length > 0) {
      return res.status(400).json({msg: 'The doctor is not available for that period.'});
    }
    const scheduledExamination = ScheduledExamination.create({
      reasonForComing,
      startTime,
      endTime,
      date,
      patient,
      doctor,
      examination,
    });
    await scheduledExamination.save();
    res
      .status(201)
      .json({ msg: "Scheduled Examination was successfully created." });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
    console.log("err", err);
  }
};

export default addScheduledExamination;
