import mongoose from "mongoose";

interface interfaceCodeSchema{
    fullCode:{
        html:string,
        css:string,
        javascript:string
    };
}
const codeSchema = new mongoose.Schema<interfaceCodeSchema>({
    fullCode:{
        html:String,
        css:String,
        javascript:String
    }
});

export const codeModel = mongoose.model("code",codeSchema);