//repositories
// getAllUserServices,getUserServices,createUserServices,UpdateUserServices,deleteUserServices
import {db} from '../prisma/db'
export async function getAllUserrepositories(){
    return await db.orm.public.User.all();
    
};
export async function AllUserrepositories(id:number){
        return await db.orm.public.User.where({id}).select("id","name").all();
    // const user= await db.orm.public.User
    // .where({ id })
    // .select("name","id").all();
    // console.log(user);
    // return user;
    
};
