import { systems } from '../../types/types'

export const getSystemsByName = (name = '') => {
   if (name === '') {
      return systems
   }

   name = name.toLowerCase()
   return systems.filter(system => system.title.toLowerCase().includes(name))
}
