import { Router } from "express";
import{getAllUsercontrollers,getUsercontrollers,createUsercontrollers,UpdateUsercontrollers,deleteUsercontrollers} from '../controllers/user.controllers'

export const userRoutes:Router=Router();
userRoutes.get('/',getAllUsercontrollers);
userRoutes.get('/:id',getUsercontrollers);
userRoutes.post('/',createUsercontrollers);
userRoutes.patch('/',UpdateUsercontrollers);
userRoutes.delete('/:id',deleteUsercontrollers);