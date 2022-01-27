import { HashRouter } from 'react-router-dom'
import DashRoutes from './DashRoutes'

const AppRoutes = () => {
  return (
    <HashRouter>
      <DashRoutes />
      {/* <Routes>
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
      </Routes> */}
    </HashRouter>
  )
}

export default AppRoutes
