import axios from "axios";
import { IUserDetail } from "../types/Types";

const base_url = 'https://usersbe.onrender.com/user'






// email:  String,
// firstName:  String,
// lastName:  String,
// phoneNumber:  String,
// dob:  String,
// location:  String,
// degree:  String,
// password: String,

export async function getUsers(email:string) {
    try {
        const request = {
            email
        }
       return await axios.get(base_url, { params: request })
            
    } catch (error) {
        console.error(error);
    }
}


export async function createUser(email:string, password:string) {
    try {
        const request = {
            email,
            password,
        }
       return await axios.post(base_url, request)
            
    } catch (error) {
        console.error(error);
    }
}


export async function updateUser(request:IUserDetail) {
    try {
        
       return await axios.put(base_url, request)
        
    } catch (error) {
        console.error(error);
    }
}