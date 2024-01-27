import {writable} from "svelte/store";

/**
 * A function that checks whether the user is logged in.
 * @returns {boolean}
 */
export default function loggedIn(){
    let session = localStorage.getItem("session");
    if(session === null){
        session = JSON.stringify({name:'',email:'',loggedIn:false});
        localStorage.setItem('session',session);
    }
    let userData = JSON.parse(session);
    user.set(userData);
}

/**
 * Logs in a user with their email.
 * @param email
 */
export function login(email){
    let session = {name:email.split("@")[0],email,loggedIn:true};
    user.set(session)
    localStorage.setItem('session',JSON.stringify(session));
}

/**
 * Logs out the current user.
 */
export function logout(){
    localStorage.setItem('session',JSON.stringify({name:'',email:'',loggedIn:false}));
    user.set({name:'',email:'',loggedIn:false})
}
export const user = writable();
