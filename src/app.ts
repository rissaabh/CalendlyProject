import express,{Express,Request,Response} from 'express';
import {userRoutes} from './routes/user.routes';
import {notFound} from './utils/api-error';
import {errorHandler} from './middleware/error-handler';
import {routeNotFound} from './middleware/route-not-found'
const app:Express=express();
app.get('/health',(_req:Request,res:Response)=>{
    res.json({
        status:"ok",
        timestamp:new Date()
    })
});
app.get('/test',(req,res)=>{
   throw notFound("not founde");
})
app.use('/api/v1/user',userRoutes); // if u recive an request with {localhost:3000} /api/v1/user 
app.use(routeNotFound);
app.use(errorHandler);
export {app};