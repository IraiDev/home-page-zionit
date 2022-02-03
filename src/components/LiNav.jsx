import { NavLink } from 'react-router-dom'

const LiNav = ({ name, onClick, to, title }) => {
  return (
    <li onClick={onClick} title={title}>
      <NavLink
        className={({ isActive }) =>
          `flex items-center gap-4 px-5 py-1.5 rounded-md hover:bg-zinc-100 font-medium transition duration-300
          ${isActive ? 'bg-zinc-100 text-indigo-600' : ''}
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
