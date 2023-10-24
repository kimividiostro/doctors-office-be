import { Patient } from "../../entities/Patient";

const getPendingRegistrations = async (req: any, res: any) => {
    try {
        const pendingRegistrations = await Patient.createQueryBuilder('patient')
        .where('patient.registrationStatus = :status', {status: 'pending'})
        .getMany();
        if(pendingRegistrations) {
            return res.status(200).json(pendingRegistrations);
        }
        return res.status(200).json([]);
    }
    catch(error) {
        return res.status(500).json({mgs: 'Something went wrong. Please try again later.'});
    }
}

export default getPendingRegistrations;