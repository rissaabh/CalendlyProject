//controllers
//Usercontrollers
import {Response,Request} from 'express';
import{getAllUserServices,getUserServices,createUserServices,UpdateUserServices,deleteUserServices} from '../services/user.services';

export async function getAllUsercontrollers(req:Request,res:Response) {
   const users= await getAllUserServices();
   res.send(users);
    
};
export async function getUsercontrollers(req:Request,res:Response) {
   const user= await getUserServices(req.params.id);
   res.send(user);
    
};
export async function createUsercontrollers(req:Request,res:Response) {
   const user= await createUserServices();
   res.json({
        status:"ok",
        timestamp:new Date(),
        message:"user created"
    })
    
};
export async function UpdateUsercontrollers(req:Request,res:Response) {
   const user= await UpdateUserServices();
   res.json({
        status:"ok",
        timestamp:new Date(),
        message:"user uppdated"
    })
    
};
export async function deleteUsercontrollers(req:Request,res:Response) {
    const status=await deleteUserServices(req.params.id);
   if(status){
     res.json({
        status:"ok",
        timestamp:new Date(),
        message:"user deleted"
    })
   }
    
};
