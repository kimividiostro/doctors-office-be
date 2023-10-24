import { Examination } from "../../entities/Examination"

export const getPendingExaminations = async (req: any, res: any) => {
    try {
        const pendingExaminations = await Examination.find({where: { isPendingApproval: true }, relations: ['specialization']});
        return res.status(200).json(pendingExaminations);
    }
    catch {
        return res.status(500).json({msg: "Something went wrong. Please try again later."});
    }
}

export default getPendingExaminations