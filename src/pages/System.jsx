import { v4 as uuidv4 } from 'uuid'

const systems = [
  {
    id: uuidv4(),
    name: 'regsitro de avance',
    url: 'http://www.zcloud.cl/registro_avance/index.php',
    icon: 'fas fa-clipboard-list',
  },
  {
    id: uuidv4(),
    name: 'control de actividades (to-do)',
    url: 'https://todo.zproduccion.cl/#/',
    icon: 'fas fa-clipboard-list',
  },
  {
    id: uuidv4(),
    name: 'plataforma clientes',
    url: 'https://tickets.zproduccion.cl/#/',
    icon: 'fas fa-ticket-alt',
  },
  {
    id: uuidv4(),
    name: 'picoltue',
    url: 'https://picoltue.zproduccion.cl/#/',
    icon: 'fas fa-chart-bar',
  },
  {
    id: uuidv4(),
    name: 'health',
    url: 'https://health.zproduccion.cl',
    icon: 'fas fa-heartbeat',
  },
]

const Li = props => (
  <li
    className='font-semibold bg-zinc-100 shadow mb-2 max-w-[600px] rounded-md
   transition duration-200 transform hover:scale-105'
  >
    <a
      className='text-blue-500 cursor-pointer flex items-center justify-between p-2.5 gap-10'
      href={props.to}
      target='_blank'
      rel='noreferrer'
    >
      <div className='capitalize flex gap-4 items-center text-base text-slate-800'>
        <i className={props.icon + ' fa-2x'} />
        <p>{props.children}</p>
      </div>
      <i className='fas fa-chevron-right' />
    </a>
  </li>
)

const System = () => {
  return (
    <main className='flex flex-col container mx-auto gap-10'>
      <header>
        <h1 className='text-2xl font-semibold'>Lista de sistema</h1>
        <p>
          Sistemas creados por ZionIT, desarrollados en distintas tecnologias,
          algunas de ellas: PHP, Node.js y React.js, base de datos MariaDB,
          sistemas alojados en servidores propios con certificacion SSL y hecho
          a medida.
        </p>
      </header>

      <ul className='mx-auto'>
        {systems.map(system => (
          <Li key={system.id} to={system.url} icon={system.icon}>
            {system.name}
          </Li>
        ))}
      </ul>
    </main>
  )
}

export default System
