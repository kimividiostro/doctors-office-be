import { Doctor } from "../../entities/Doctor";

export const getExaminationsByDoctor = async (req: any, res: any) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findOne({where: {id}, relations: ['examinations']});
        if(!doctor) {
            return res.status(404).json({msg: 'Doctor with given id was not found'});
        }
        return res.status(200).json(doctor.examinations);
    }
    catch(error) {
        return res.status(400).json({msg: 'Something went wrong. Please try again later.'});
    }
    
}

export default getExaminationsByDoctor;