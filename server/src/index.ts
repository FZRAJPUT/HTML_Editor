import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import compilerRouter from './routes/compilerRoutes';
import { dbConnect } from './config/db';
const app = express();

app.use(express.json());
app.use(cors());
config();

app.get("/", (req: Request, res: Response): void => {
    res.status(200).send("Hello from server..");
});
app.use("/compiler",compilerRouter)

dbConnect();
app.listen(4000, () => {
    console.log("Server running on => http://localhost:4000");
});
