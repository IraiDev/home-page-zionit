import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { routes } from '../types/types'
import Home from '../pages/Home'
import About from '../pages/About'
import System from '../pages/System'

const DashRoutes = () => {
  return (
    <main className='min-h-screen min-w-full'>
      <NavBar />
      <div className='p-5'>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.system} element={<System />} />
        </Routes>
      </div>
    </main>
  )
}

export default DashRoutes
