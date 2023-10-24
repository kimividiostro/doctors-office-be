import Session from "../../entities/Session";
import { Doctor } from "../../entities/Doctor";
import { Manager } from "../../entities/Manager";
import { Patient } from "../../entities/Patient";


const login = async (req: any, res: any) => {
    const { userName, password, userRole } = req.body;
    if(!userName || !password || !userRole) {
        return res.status(400).json({msg: 'Please fill out all required fields.'});
    }

    let user;
    try {
        if(userRole === 'patient') {
            user = await Patient.createQueryBuilder('patient')
            .addSelect('patient.password')
            .where(`patient.userName = :userName`, { userName })
            .andWhere('patient.registrationStatus = :status', { status: 'approved' })
            .getOne();
        }
        if(userRole === 'doctor') {
            user = await Doctor.createQueryBuilder('doctor')
            .addSelect('doctor.password')
            .where(`doctor.userName = :userName`, { userName })
            .innerJoinAndSelect('doctor.specialization', 'specialization')
            .getOne();
        }
        if(userRole === 'manager') {
            user = await Manager.createQueryBuilder('manager')
            .addSelect('manager.password')
            .where(`manager.userName = :userName`, { userName })
            .getOne();
        }
    
        if(!user || user?.password !== password) {
            return res.status(404).json({msg: 'Invalid credentials'});
        }
    
        const expirationTime = new Date();
        expirationTime.setMinutes(expirationTime.getMinutes() + 30);
    
        const session = Session.create({
            userRole,
            userId: user.id,
            expiresAt: expirationTime 
        });

        await session.save();

        return res.status(201).json({sessionId: session.id, user});
    }
    catch (error){
        console.log(error)
        return res.status(500).json({msg: 'Something went wrong. Please try again later'});
    }
}

export default login;