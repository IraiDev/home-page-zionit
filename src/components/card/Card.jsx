const Technology = ({ name }) => (
   <span className='absolute -top-3 right-10 px-3 py-1 rounded-xl bg-blue-200 text-blue-500 shadow-lg font-semibold capitalize text-sm'>
      {name}
   </span>
)

const Card = ({ children }) => {
   return (
      <div className='relative bg-white text-slate-700 grid content-between p-5 rounded-xl shadow-lg transform transition duration-200 hover:scale-[1.02]'>
         {children}

         <Technology name='react' />
      </div>
   )
}

export default Card
