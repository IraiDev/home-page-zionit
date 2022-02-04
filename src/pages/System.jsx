import { v4 as uuidv4 } from 'uuid'
const URL_TYPE = process.env.REACT_APP_ULR_TYPE
const URL_DOMAIN = process.env.REACT_APP_URL_DOMAIN

const systems = [
  {
    id: uuidv4(),
    name: 'registro de avance',
    url: 'http://www.zcloud.cl/registro_avance/index.php',
    icon: 'fas fa-clipboard-list',
  },
  {
    id: uuidv4(),
    name: 'control de actividades (to-do)',
    url: `${URL_TYPE}://todo.${URL_DOMAIN}.cl/#/`,
    icon: 'fas fa-clipboard-list',
  },
  {
    id: uuidv4(),
    name: 'plataforma clientes',
    url: `${URL_TYPE}://tickets.${URL_DOMAIN}.cl/#/`,
    icon: 'fas fa-ticket-alt',
  },
  {
    id: uuidv4(),
    name: 'picoltue',
    url: `${URL_TYPE}://picoltue.${URL_DOMAIN}.cl/#/`,
    icon: 'fas fa-chart-bar',
  },
  {
    id: uuidv4(),
    name: 'health',
    url: `${URL_TYPE}://health.${URL_DOMAIN}.cl`,
    icon: 'fas fa-heartbeat',
  },
]

const List = ({ title, subtitle, icon, to }) => (
  <li className='flex justify-between items-center bg-white py-3 px-6 rounded-md shadow-md gap-3 md:gap-6 transition duration-200 transform hover:scale-[1.02]'>
    <section className='flex items-center gap-3 md:gap-6'>
      <div className='min-w-[44px] h-11 bg-zinc-100 rounded-full flex items-center justify-center'>
        <i className={icon + ' fa-lg text-zinc-400'} />
      </div>
      <div>
        <h1 className='text-lg text-blue-600 font-semibold first-letter:uppercase'>
          {title}
        </h1>
        <h5 className='text-zinc-400 hidden md:block'>{subtitle}</h5>
      </div>
    </section>
    <section className='flex items-center gap-4'>
      <a
        className='py-1.5 px-2 bg-emerald-100 text-emerald-500 rounded-lg font-semibold transition duration-200 transform hover:scale-110'
        href={to}
        target='_blank'
        rel='noreferrer'
      >
        <p className='hidden md:block'>visitar sitio</p>
        <p className='md:hidden block'>visitar</p>
      </a>
      <i className='fas fa-chevron-right text-zinc-300' />
    </section>
  </li>
)

const System = () => {
  console.log(systems[1].url)

  return (
    <main className='flex flex-col container mx-auto border rounded-md shadow-md bg-zinc-100/60'>
      <header className='py-5 px-6'>
        <h1 className='text-xl font-semibold text-zinc-400'>
          Lista de sistemas
        </h1>
      </header>

      <ul className='w-full grid lg:grid-cols-2 gap-2 p-2 md:gap-4 md:p-4'>
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
