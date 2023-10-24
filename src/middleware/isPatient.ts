
const isPatient = (req: any, res: any, next: any) => {
    if(req.user.role === 'patient') {
        next();
    }
    return res.status(403).json({msg: 'Forbidden.'});
}

export default isPatient;