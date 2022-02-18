import { createContext, useState } from 'react'
import { users } from '../types/types'
import { systems } from '../types/types'

const LOCALUSER = window.localStorage.getItem('user-zionit-validate') || null

export const AppContext = createContext()

const AppProvider = ({ children }) => {
   const [user, setuser] = useState({
      ok: LOCALUSER ? users.some(u => u === LOCALUSER) : false,
      name: LOCALUSER,
   })
   const [systemList, setSystemList] = useState(systems)

   const login = ({ user }) => {
      setuser({ ok: users.some(u => u === user), name: user })
   }

   const logout = () => {
      window.localStorage.removeItem('user-zionit-validate')
      setuser({ ok: false })
   }

   return (
      <AppContext.Provider
         value={{ user, login, logout, systemList, setSystemList }}>
         {children}
      </AppContext.Provider>
   )
}

export default AppProvider
