import { Examination } from "../../entities/Examination";

export const addNewExaminationRequest = async (req: any, res: any) => {
    const examination = req.body.examination;

    if(!examination) {
        return res.status(400).json({ msg: "Please provide valid data." });
    }

    try {
        await Examination.insert(examination);
        return res.status(201).json({msg: "Request successfully created."});
    }
    catch(error) {
        return res.status(500).json({msg: "An error occurred. Check request data and try again later."});
    }
}