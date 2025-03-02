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
        async function fetchData() {
            await getUser()
        }
        fetchData()
    },[] )

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}




