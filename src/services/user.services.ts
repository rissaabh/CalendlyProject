//services
import fr from "zod/v4/locales/fr.cjs";
import{getAllUserrepositories,AllUserrepositories} from '../repositories/user.repositories'
export async function getAllUserServices() {
    console.log('[getAllUserServices]');
    return await getAllUserrepositories();
    
};
export async function getUserServices(id:number) {
    console.log('[getUserServices] '+id);
    return await AllUserrepositories(id);
    
};
export async function createUserServices() {
    console.log('[createUserServices]');
    return true;
    
    
};
export async function UpdateUserServices() {
    console.log('[UpdateUserServices]');
    return true;
        
};
export async function deleteUserServices(id:number) {
    console.log('[deleteUserServices] '+id);
    return true;
        
};

