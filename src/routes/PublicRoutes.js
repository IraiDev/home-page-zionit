import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { routes } from '../types/types'

const PublicRoutes = ({ children }) => {
  const { user } = useContext(AppContext)

  return user.ok ? <Navigate to={routes.home} /> : children
}

export default PublicRoutes
