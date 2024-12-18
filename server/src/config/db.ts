import mongoose from 'mongoose';

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB!, {
            dbName: "webCompiler"
        },
        )
        console.log("DB connected")
    } catch (error) {
        console.log(error);
    }
}