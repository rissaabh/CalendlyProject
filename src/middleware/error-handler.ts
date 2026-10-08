import {Request,Response,NextFunction} from 'express'
import {ApiError} from '../utils/api-error'
import {NODE_ENV} from '../config/env'
export function errorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    if(err  instanceof ApiError ){
    const body:Record<string,unknown>={
        success:false,
        message:err.message,
        }
        if(err.details){
            body.details=err.details
            };
            console.log(err.StatusCode,body);
        res.status(err.StatusCode).json(body)
         return;
    }
    
    const body:Record<string,unknown>={
         message: "Something went wrong"
        }
        if(NODE_ENV==="devlopment") body.details=err.stack;
     res.status(500).json(body);
    
};