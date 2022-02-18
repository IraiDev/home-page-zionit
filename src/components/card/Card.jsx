import Technology from '../Tecnology'

const Card = ({ children, tecnology }) => {
   return (
      <div className='relative bg-white text-slate-700 grid content-between p-5 rounded-xl shadow-lg transform transition duration-200 hover:scale-[1.02]'>
         {children}

         <Technology name={tecnology} />
      </div>
   )
}

export default Card
