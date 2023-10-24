import { Doctor } from "../../entities/Doctor";

export const getExaminationRequests = async (req: any, res: any) => {
    try{ 
        const requests = await Doctor.createQueryBuilder('doctor')
        .innerJoinAndSelect('doctor.examinationRequests', 'examinations')
        .innerJoinAndSelect('doctor.specialization', 'specialization')
        .getMany();
        res.status(200).json(requests)
    }
    catch {
        res.status(500).json({msg: 'Something went wrong. Please try again later.'});
    }
}

export default getExaminationRequests;