import { Doctor } from "../../entities/Doctor";

export const evaluateDoctorExaminationRequest = async (req: any, res: any) => {
    const { evaluation, doctorId } = req.body;
    console.log(evaluation, doctorId)
    if(evaluation === undefined || !doctorId){
        return res.status(400).json({msg: 'Please fill out all required fields.'});
    }

    try {
        const doctor = await Doctor.findOne({where: {id: doctorId}, relations: ['examinationRequests']});
        if(!doctor) {
            return res.status(404).json({msg: 'Doctor with given id was not found.'});
        }

        if(evaluation === true) {
            doctor.examinations = [...doctor.examinationRequests];
            doctor.examinationRequests = [];
            await doctor.save();
            return res.status(200).json({msg: 'success'});
        }
        
        if(evaluation === false) {
            doctor.examinationRequests = [];
            await doctor.save();
            return res.status(200).json({msg: 'success'});
        }

        return res.status(500).json({msg: 'Something went wrong. Please try again later.'});
    }
    catch(error) {
        return res.status(400).json({msg: error});
    }
}

export default evaluateDoctorExaminationRequest