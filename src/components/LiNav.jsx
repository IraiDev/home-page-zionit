import { NavLink } from 'react-router-dom'

const LiNav = ({ name, onClick, to, title }) => {
   return (
      <li onClick={onClick} title={title}>
         <NavLink
            className={({ isActive }) =>
               `flex items-center gap-4 px-5 py-1.5 rounded-full hover:bg-zinc-300/10 font-medium transition duration-300
               text-white/60
              ${
                 isActive
                    ? 'bg-zinc-400/10 font-semibold text-white/100 transform scale-110'
                    : ''
              }
              `
            }
            to={to}>
            {name}
         </NavLink>
      </li>
   )
}

export default LiNav
