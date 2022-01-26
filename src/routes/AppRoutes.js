import { HashRouter, Routes, Route } from 'react-router-dom'
import { routes } from '../types/types'
import PublicRoutes from './PublicRoutes'
import Login from '../pages/Login'
import PrivateRoutes from './PrivateRoutes'
import DashRoutes from './DashRoutes'

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={routes.login}
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path='/*'
          element={
            <PrivateRoutes>
              <DashRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </HashRouter>
  )
}

export default AppRoutes
