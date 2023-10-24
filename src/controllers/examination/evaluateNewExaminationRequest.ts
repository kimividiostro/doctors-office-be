import { Examination } from "../../entities/Examination";

export const evaluateNewExaminationRequests = async (req: any, res: any) => {
    const { examinationId, evaluation  } = req.body;

    if(evaluation === undefined || !examinationId) {
        return res.status(400).json({msg: "Please fill out all required fields."});
    }

    if(evaluation === true) {
        try {
            const query = Examination.createQueryBuilder()
            .update()
            .set({isPendingApproval: false})
            .where(`id = ${examinationId}`);
            await query.execute();
            return res.status(204).json({msg: "New examination approved"});
        }
        catch {
            return res.status(500).json({msg: "Something went wrong. Please try again later."});
        }
    }
    else {
        try{
            await Examination.delete({id: examinationId});
            return res.status(200).json({msg: "Request declined."});
        }
        catch {
            return res.status(500).json({msg: "Something went wrong. Please try again later."});
        }
    }
}