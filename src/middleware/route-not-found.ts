import {notFound} from '../utils/api-error'
import { Request,Response,NextFunction } from "express";

export const routeNotFound=(req:Request,res:Response,next:NextFunction)=>{
    next(notFound("route not found"));
}