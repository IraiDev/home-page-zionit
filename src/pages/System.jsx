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

const List = ({ title, subtitle, icon, to }) => (
  <li className='flex justify-between items-center bg-white py-3 px-6 border-b'>
    <section className='flex items-center gap-6'>
      <div className='w-11 h-11 bg-zinc-100 rounded-full flex items-center justify-center'>
        <i className={icon + ' fa-lg text-zinc-400'} />
      </div>
      <div>
        <h1 className='text-lg text-indigo-600 font-semibold first-letter:uppercase'>
          {title}
        </h1>
        <h5 className='text-zinc-400'>{subtitle}</h5>
      </div>
    </section>
    <section className='flex items-center gap-4'>
      <a
        className='py-1.5 px-2 bg-emerald-100 text-emerald-500 rounded-lg font-semibold transition duration-200 transform hover:scale-110'
        href={to}
        target='_blank'
        rel='noreferrer'
      >
        visitar sitio
      </a>
      <i className='fas fa-chevron-right text-zinc-300' />
    </section>
  </li>
)

const System = () => {
  return (
    <main className='flex flex-col container mx-auto border rounded-md shadow-md bg-zinc-100'>
      <header className='py-5 px-6 border-b'>
        <h1 className='text-xl font-semibold'>Sistemas ZionIT</h1>
      </header>

      <ul className='w-full'>
        {systems.map(system => (
          <List
            key={system.id}
            to={system.url}
            icon={system.icon}
            title={system.name}
            subtitle='sistema'
          />
        ))}
      </ul>
    </main>
  )
}

export default System
