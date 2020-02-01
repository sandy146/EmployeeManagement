import { connectDB } from './connect-db'

export async function assembleUserState(user){
    let db = await connectDB();

    let employees =  await db.collection(`employees`).find({}).toArray();
    let users = [await db.collection(`users`).findOne({id:user.id})];

    return {
        session:{authenticated:`AUTHENTICATED`,id:user.id},
        users,
        employees
    };
}