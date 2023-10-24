
const isManager = (req: any, res: any, next: any) => {
    if(req.user.role === 'manager') {
        next();
    }
    return res.status(403).json({msg: 'Forbidden.'});
}

export default isManager;