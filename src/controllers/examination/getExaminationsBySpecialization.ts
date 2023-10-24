import { Examination } from "../../entities/Examination";

const getExaminationsBySpecialization = async (req: any, res: any) => {
  const id = +req.params.id;
  if(!id) return res.status(404).json({msg: 'Please provide valid specialization id.'});

  const examinations = await Examination.createQueryBuilder('examinations').
    where(`specialization_id = ${id}`).getMany();
  
    return res.status(200).json(examinations);
};

export default getExaminationsBySpecialization;
