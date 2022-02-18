const Technology = ({ name }) => {
   let styles = ''

   switch (name) {
      case 'react':
         styles = 'bg-gradient-to-r from-blue-400 to-green-400 text-white'
         name = 'react + node'
         break

      case 'php':
         styles = 'bg-gradient-to-r from-blue-400 to-yellow-400 text-white'
         name = 'php + js'
         break

      default:
         break
   }

   return (
      <span
         className={`absolute -top-3 right-10 px-3 py-1 rounded-xl shadow-lg font-semibold 
         capitalize text-sm
         ${styles}
         `}>
         {name}
      </span>
   )
}

export default Technology
