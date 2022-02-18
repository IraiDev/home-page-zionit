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
            className={`grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4
               animate__animated animate__faster my-5
               ${show ? 'animate__fadeIn' : 'hidden'} 
            `}>
            {children}
         </section>
      </div>
   )
}

export default SystemContainer
