import { createContext, useContext, useEffect, useState } from 'react'
import {GetUsers} from '../services/GetUsers'
const ContextProps = createContext();

export const ProviderProps = ({children}) => {

  const [email, setEmail] = useState('');

  const loadApi = async () => { 

    const response = await GetUsers();

    if(response.status === 200){
      console.log('res', response.data)
    } else {
      console.log('Error', response)
    }
  }
  useEffect(() => {
    loadApi();
  }, []);

  return (
    <ContextProps.Provider value={{email, setEmail}}>
          {children}
    </ContextProps.Provider>
  )
}
export const useProps = () => useContext(ContextProps);