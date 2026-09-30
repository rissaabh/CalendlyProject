import {app} from './app.js';
import {PORT} from './config/env.js';
import{db} from './prisma/db.js'
export async function startServer(){
    await db;
    app.listen(PORT,()=>{
        console.log("[Server] is listening at PORT ",PORT)
    });
};
startServer().catch((err)=>{
    console.log(`[server is unable to start] ${err}`  )
});