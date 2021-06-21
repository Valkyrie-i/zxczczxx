import {$authHost, $host} from "./index";

export const registration = async (email,password,name,surname) =>{
    const response = await $host.post('api/user/registration', {email,password,name,surname,role:'ADMIN'})
    return response
}
export const login = async (email,password,name,surname) =>{
    const response = await $host.post('api/user/login', {email,password})
    return response
}
export const check = async () =>{
    const response = await $host.post('api/auth/registration', )
    return response
}