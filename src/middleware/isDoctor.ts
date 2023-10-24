
const isDoctor = (req: any, res: any, next: any) => {
    if(req.user.role === 'doctor') {
        next();
    }
    return res.status(403).json({msg: 'Forbidden.'});
}

export default isDoctor;