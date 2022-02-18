import Card from '../components/card/Card'
import CardHeader from '../components/card/CardHeader'
import CardBody from '../components/card/CardBody'
import CardFooter from '../components/card/CardFooter'
import { systems } from '../types/types'

const LinkTo = ({ to, children, className }) => (
   <a
      className={
         className +
         ` py-2 px-4 font-semibold focus:outline-none flex justify-between items-center
          transition duration-300 text-base rounded-full cursor-pointer`
      }
      href={to}
      target='_blank'
      rel='noopener noreferrer'>
      {children}
   </a>
)

const System = () => {
   return (
      <main className='container mx-auto z-20 grid grid-cols-4 gap-5'>
         {systems.map(item => (
            <Card key={item.id} tecnology={item.tecno}>
               <CardHeader {...item} />
               <CardBody>{item.desc}</CardBody>
               <CardFooter>
                  <LinkTo
                     className='text-blue-500 hover:bg-blue-50'
                     to={item.url}>
                     ir al sistemas
                  </LinkTo>
               </CardFooter>
            </Card>
         ))}
      </main>
   )
}

export default System
