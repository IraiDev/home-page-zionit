import { v4 as uuidv4 } from 'uuid'

export const routes = {
   home: '/',
   login: '/login',
   about: '/about',
   system: '/sistemas',
}

export const users = ['iarriagada', 'sacuna', 'rdelcanto', 'fmarin', 'caraneda']

const URL_TYPE = process.env.REACT_APP_ULR_TYPE
const URL_DOMAIN = process.env.REACT_APP_URL_DOMAIN

export const systems = [
   {
      id: uuidv4(),
      title: 'registro de avance',
      desc: 'Controla tus actividades de trabajo.',
      url: 'http://www.zcloud.cl/registro_avance/index.php',
      icon: 'fas fa-clipboard-list',
   },
   {
      id: uuidv4(),
      title: 'control de actividades',
      desc: 'Revisa tus actividades, crea tareas, notas y actividades y revisa tu tiempo de trabajo.',
      url: `${URL_TYPE}://todo.${URL_DOMAIN}.cl/#/`,
      icon: 'fas fa-clipboard-list',
   },
   {
      id: uuidv4(),
      title: 'plataforma clientes',
      desc: 'Revisa, crea eventos y nuevos ticket para solicitar ayuda.',
      url: `${URL_TYPE}://tickets.${URL_DOMAIN}.cl/#/`,
      icon: 'fas fa-ticket-alt',
   },
   {
      id: uuidv4(),
      title: 'picoltue',
      desc: 'Obserba en avence de cosechas de tu empresa.',
      url: `${URL_TYPE}://picoltue.${URL_DOMAIN}.cl/#/`,
      icon: 'fas fa-chart-bar',
   },
   {
      id: uuidv4(),
      title: 'health',
      desc: 'Observa informacion importante de forma rapida y directa sobre tu empresa.',
      url: `${URL_TYPE}://health.${URL_DOMAIN}.cl`,
      icon: 'fas fa-heartbeat',
   },
]
