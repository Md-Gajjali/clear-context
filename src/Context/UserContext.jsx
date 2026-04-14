import { createContext, useEffect, useState } from "react";

export const User = createContext()

 
 const UserContext = ({children}) => {
    const [user,setUser]=useState([ ])

    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data)=> setUser(data.users));
    },[])



   return (
     <User value={{user}}>
        {children}
     </User>
   )
 }
 
 export default UserContext
 