import { createContext, useEffect, useState } from "react";

export const User = createContext()

 
 const UserContext = ({children}) => {
    const [user,setUser]=useState([ ])

    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then();
    },[])

   return (
     <div>
       
     </div>
   )
 }
 
 export default UserContext
 