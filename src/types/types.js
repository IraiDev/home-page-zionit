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
      tecno: 'php',
   },
   {
      id: uuidv4(),
      title: 'control de actividades',
      desc: 'Revisa tus actividades, crea tareas, notas y actividades y revisa tu tiempo de trabajo.',
      url: `${URL_TYPE}://todo.${URL_DOMAIN}.cl/#/`,
      icon: 'fas fa-clipboard-list',
      tecno: 'react',
   },
   {
      id: uuidv4(),
      title: 'plataforma clientes',
      desc: 'Revisa, crea eventos y nuevos ticket para solicitar ayuda.',
      url: `${URL_TYPE}://tickets.${URL_DOMAIN}.cl/#/`,
      icon: 'fas fa-ticket-alt',
      tecno: 'react',
   },
   {
      id: uuidv4(),
      title: 'health',
      desc: 'Observa informacion importante de forma rapida y directa sobre tu empresa.',
      url: `${URL_TYPE}://health.${URL_DOMAIN}.cl`,
      icon: 'fas fa-heartbeat',
      tecno: 'react',
   },
   {
      id: uuidv4(),
      title: 'recetas',
      desc: 'Observa como se componen tus productos.',
      url: `${URL_TYPE}://recetas.${URL_DOMAIN}.cl`,
      icon: 'fas fa-heartbeat',
      tecno: 'react',
   },
   {
      id: uuidv4(),
      title: 'factura electronica',
      desc: 'Firma, genera y valida facturas de tu empresa.',
      url: `${URL_TYPE}://factura.${URL_DOMAIN}.cl`,
      icon: 'fas fa-heartbeat',
      tecno: 'react',
   },
   {
      id: uuidv4(),
      title: 'picoltue',
      desc: 'Obserba en avence de cosechas de tu empresa.',
      url: `${URL_TYPE}://picoltue.${URL_DOMAIN}.cl/#/`,
      icon: 'fas fa-chart-bar',
      tecno: 'react',
   },
   {
      id: uuidv4(),
      title: 'Curimapu export',
      desc: 'ERP para empresa curimapu.',
      url: `http://www.zcloud.cl/curimapu/index.php`,
      icon: 'fas fa-heartbeat',
      tecno: 'php',
   },
   {
      id: uuidv4(),
      title: 'Sistema de reservas',
      desc: 'Sistema de reserva para profesionales.',
      url: `http://www.zcloud.cl/reservas/SistemaOnline.php`,
      icon: 'fas fa-heartbeat',
      tecno: 'php',
   },
   {
      id: uuidv4(),
      title: 'BNC activa',
      desc: 'Sistema de recetas para BNC.',
      url: `http://pruebas-erp.cl/bcn02/receta_ver.php?n=1`,
      icon: 'fas fa-heartbeat',
      tecno: 'php',
   },
   {
      id: uuidv4(),
      title: 'Detenciones',
      desc: 'Obserba las deteneciones de tus trabajadores en tiempo real.',
      url: `http://www.zcloud.cl/puntos/lista_proyectos_estilos.php?page=1&txtHasta=&txtDesde=&txtOrden=&filterPatente=LXLH19%20-%20I&txtIdDet=&fechaIniDet=&cmbTipoDet=&filterCampo=&cmbRadio=HORARIO&fechaInit=&fechaEnd=&filtroTablas=`,
      icon: 'fas fa-heartbeat',
      tecno: 'php',
   },
   {
      id: uuidv4(),
      title: 'Trabaje',
      desc: 'Sistema para el reclutamiento de personal.',
      url: `http://www.zcloud.cl/curimapu_tcn/`,
      icon: 'fas fa-heartbeat',
      tecno: 'php',
   },
   {
      id: uuidv4(),
      title: 'ERP huertos collipulli',
      desc: 'ERP para CRS.',
      url: `http://zcloud.cl/erp-hc/principal.php`,
      icon: 'fas fa-heartbeat',
      tecno: 'php',
   },
]
