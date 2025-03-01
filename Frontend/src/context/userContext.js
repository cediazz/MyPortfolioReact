import { createContext, useState,useEffect } from 'react'
import axios from 'axios'
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState()

    const getUser = async () => {
        try {
          let response = await axios.get('http://127.0.0.1:8000/users/')
          if (response.status === 200)
            setUser(response.data)
        } catch (error) {
          console.log(error)
        }
      }

    useEffect( () => {
        getUser()
    },[] )

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}




