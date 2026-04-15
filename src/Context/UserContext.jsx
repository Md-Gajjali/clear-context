import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

 
 const UserContext = ({children}) => {

    const [user,setUser]=useState([ ])

    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data)=> setUser(data.users));
    },[])



   return (
     <UserContext value={{user}}>
        {children}
     </UserContext>
   )
 }
 
 export default UserContext
 