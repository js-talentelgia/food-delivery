import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { verfiyRole } from "./middlewares/role.middleware.js";
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: '16kb'}));
app.use(urlencoded({extended: true, limit: '16kb'}))
app.use(express.static('public'))
app.use(cookieParser());

import userRouter from './routes/user.routes.js'
import adminRouter from './routes/admin.routes.js'

app.use('/api/v1/users', userRouter);
app.use('/api/v1/admin', adminRouter);

export { app } 