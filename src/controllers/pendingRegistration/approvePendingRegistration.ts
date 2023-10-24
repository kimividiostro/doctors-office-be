import { Patient } from "../../entities/Patient";

const approvePendingRegistration = async (req: any, res: any) => {
    const { id } = req.body;

    try{
        const patient = await Patient.findOneBy({id});
        if(!patient) {
            return res.status(404).json({msg: 'User with given id was not found.'});
        }
        patient.registrationStatus = 'approved';
        await patient.save();
        return res.status(200).json({msg: 'Registration approved.'});
    }
    catch (error) {
        return res.send(500).json({ msg: 'Something went wrong. Please try again later.' });
    }
}

export default approvePendingRegistration;