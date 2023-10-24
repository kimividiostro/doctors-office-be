import { Doctor } from "../../entities/Doctor";

export const addExaminationRequest = async (req: any, res: any) => {
    const { doctorId, examinations } = req.body;
    if(!doctorId || !examinations) {
        return res.status(400).json({msg: "Please fill out all required fields."});
    }
    const doctor = await Doctor.findOneBy({id: doctorId});
    if(!doctor) {
        return res.status(404).json({msg: "Doctor with given id was not found."});
    }
    doctor.examinationRequests = examinations;
    await doctor.save();
    return res.status(201).json({msg: 'Request successfully created.'});
}

export default addExaminationRequest;