import { Manager } from "../../entities/Manager";
import { Doctor } from "../../entities/Doctor";
import { Patient } from "../../entities/Patient";

const changePassword = async (req: any, res: any) => {
    const { id, role, oldPassword, newPassword, repeatPassword } = req.body;
    if(!id || !role || !oldPassword || !newPassword || !repeatPassword) {
        return res.status(400).json({ msg: "Please fill out all required fields." });
    }
    if(newPassword !== repeatPassword) {
        return res.status(400).json({ msg: "Passwords don't match." });
    }

    let user;
    if(role === 'patient') {
        user = await Patient
        .createQueryBuilder('patient')
        .addSelect('patient.password')
        .where(`patient.id = ${id}`)
        .getOne();
    }
    if(role === 'doctor') {
        user = await Doctor
        .createQueryBuilder('doctor')
        .addSelect('doctor.password')
        .where(`doctor.id = ${id}`)
        .getOne();
    }
    if(role === 'manager') {
        user = await Manager
        .createQueryBuilder('manager')
        .addSelect('manager.password')
        .where(`manager.id = ${id}`)
        .getOne();
    }

    if(user?.password !== oldPassword) {
         return res.status(400).json({ msg: 'Incorrect password provided.' });
    }

    if(user?.password === newPassword) {
        return res.status(400).json({ msg: 'Please provide a new value for the password' });
    }

    if(role === 'patient'){
        await Patient.update(id, {password: newPassword});
    }
    if(role === 'doctor') {
        await Doctor.update(id, {password: newPassword});
    }
    if(role === 'manager') {
        await Manager.update(id, {password: newPassword});
    }

    return res.status(200).json({msg: 'Password successfully changed.'});
}

export default changePassword;