import { Request, Response } from "express";
import { codeModel } from "../models/codeModel";

export const saveCode = async (req: Request, res: Response) => {
    const { fullCode } = req.body;
    try {
        const newCode = await codeModel.create({
            fullCode: fullCode
        })
        console.log(newCode);
        res.status(201).json({ url: newCode._id, status: "saved!" })
    } catch (error) {
        res.status(500).json({ message: "Error saving code", error: error })
    }
}

export const loadCode = async (req: Request, res:Response) =>{
    const {urlId} = req.body;
    try {
        const existCode = await codeModel.findById(urlId)
        if(!existCode){
           res.status(500).json({message:"Invalid Url.."})
        } else {
            console.log(existCode);
            res.json(201).json({fullCode:existCode.fullCode})
        }
        
    } catch (error) {
        res.status(500).json({message:"Error loading Code..",Error:error})
    }
}