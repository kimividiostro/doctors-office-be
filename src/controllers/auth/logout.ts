import Session from "../../entities/Session";

const logout = async (req: any, res: any) => {
    const { sessionId } = req.body;
    if(!sessionId){
        return res.send(400).json({msg: 'Session id missing'});
    }

    try {
        await Session.delete(sessionId)
        return res.status(204).json();
    }

    catch(error) {
        return res.status(500).json({msg: 'Something went wrong. Please try again later'});
    }
}

export default logout;

