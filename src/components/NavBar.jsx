import { routes } from '../types/types'
import { useNavigate } from 'react-router-dom'
import LiNav from './LiNav'
import Button from './Button'
import logo from '../assets/logo/logo25x25.png'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'

export const NavBar = () => {
  const navigate = useNavigate()
  const { logout } = useContext(AppContext)

  const handleLogout = () => {
    logout()
    navigate(routes.login, { replace: true })
  }

  return (
    <nav className='bg-white h-16 shadow-md px-5 sticky top-0 flex items-center justify-between'>
      <img
        className='cursor-pointer'
        onClick={() => navigate(routes.home)}
        src={logo}
        alt=''
      />
      <ul className='flex items-center justify-center'>
        <LiNav to={routes.home} name='Inicio' />
        <LiNav to={routes.system} name='sistemas' />
        <LiNav to={routes.about} name='Acerba de' />
      </ul>
      <Button rounded='full' isOutline color='red' onClick={handleLogout}>
        cerrar sesión
        <i class='fas fa-sign-out-alt' />
      </Button>
    </nav>
  )
}
