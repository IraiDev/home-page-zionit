import { Route, Routes } from 'react-router-dom'
import { routes } from '../types/types'
import System from '../pages/System'
import Nav from '../components/Nav'

const DashRoutes = () => {
   return (
      <main className='min-h-screen min-w-full'>
         {/* <NavBar /> */}
         <Nav />
         <div className='grid content-center relative bg-white'>
            <div className='h-[700px] bg-gradient-to-b from-sky-800 via-sky-700/80 to-transparent w-full fixed top-0 z-10' />
            <Routes>
               <Route path={routes.home} element={<System />} />
               <Route path={routes.system} element={<System />} />
            </Routes>
         </div>
      </main>
   )
}

export default DashRoutes
