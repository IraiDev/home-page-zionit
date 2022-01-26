import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { routes } from '../types/types'

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AppContext)

  return user.ok ? children : <Navigate to={routes.login} />
}

export default PrivateRoutes
