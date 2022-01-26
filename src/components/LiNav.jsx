import { NavLink } from 'react-router-dom'

const LiNav = ({ name, onClick, to, title }) => {
  return (
    <li
      className='transition duration-300 rounded-full'
      onClick={onClick}
      title={title}
    >
      <NavLink
        className={({ isActive }) =>
          `flex items-center gap-4 px-3 py-1.5 capitalize rounded-full hover:bg-slate-200/40 transition duration-300
          ${isActive ? 'font-semibold  text-blue-500' : 'text-black'}
          `
        }
        to={to}
      >
        {name}
      </NavLink>
    </li>
  )
}

export default LiNav
