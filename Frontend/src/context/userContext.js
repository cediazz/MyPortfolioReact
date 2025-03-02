import { createContext, useState,useEffect } from 'react'
import axios from 'axios'
import Page404 from '../Components/Page404/Page404'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState()
    const [error, setError] = useState(false)


    const getUser = async () => {
        try {
          let response = await axios.get('http://127.0.0.1:8000/users/')
          if (response.status === 200)
            setUser(response.data)
        } catch (error) {
          console.log(error)
          setError(true)
        }
      }

    useEffect( () => {
        async function fetchData() {
            await getUser()
        }
        fetchData()
    },[] )

    if (error){
       return <Page404 />
    }

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}




