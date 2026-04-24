import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const User = createContext()

 
 const UserContext = ({ children }) => {

    const [user,setUser]=useState([ ])
    const [error, setError] = useState()
    console.log(user)


    useEffect(()=>{
        async function getUsers () {
        try {
          const res = await axios.get('https://dummyjson.com/use')
          setUser(res.data.users)
        } catch (error) {
          console.log("Error fetching users:", error)
        }
      }
      getUsers()
        
    },[])



   return (
     <User value={{user}}>
        {children}
     </User>
   )
 }
 
 export default UserContext
 