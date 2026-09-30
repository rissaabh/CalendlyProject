import express,{Express,Request,Response} from 'express';
import {userRoutes} from './routes/user.routes';
const app:Express=express();
app.get('/health',(_req:Request,res:Response)=>{
    res.json({
        status:"ok",
        timestamp:new Date()
    })
   

});
app.use('/api/v1/user',userRoutes); // if u recive an request with {localhost:3000} /api/v1/user 
export {app};