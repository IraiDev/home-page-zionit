import Button from './Button'

const SystemContainer = ({ children, toggler, show, env }) => {
   return (
      <div>
         <header className='flex justify-between items-center text-white mb-8 bg-black/10 px-4 rounded-xl'>
            <h2 className='capitalize text-lg font-semibold'>{env}</h2>
            <Button className='hover:text-white/60' onClick={toggler}>
               {show ? 'Ocultar' : 'Mostrar'}
               <i
                  className={show ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}
               />
            </Button>
         </header>
         <section
            className={`grid grid-cols-4 gap-5 animate__animated animate__faster my-5
               ${show ? 'animate__fadeIn' : 'hidden'} 
            `}>
            {children}
         </section>
      </div>
   )
}

export default SystemContainer
