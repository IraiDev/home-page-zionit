import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useToggle } from '../hooks/useToggle'
import Card from '../components/card/Card'
import CardHeader from '../components/card/CardHeader'
import CardBody from '../components/card/CardBody'
import CardFooter from '../components/card/CardFooter'
import SystemContainer from '../components/SystemContainer'

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
   const { systemList } = useContext(AppContext)
   const [produccion, togglerProduccion] = useToggle(true)
   const [desarrollo, togglerDesarrollo] = useToggle(true)

   return (
      <main className='container mx-auto z-20 max-h-[75vh] overflow-custom overflow-x-hidden px-5'>
         <SystemContainer
            env='producción'
            show={produccion}
            toggler={togglerProduccion}>
            {systemList.map(
               item =>
                  item.env === 'pro' && (
                     <Card key={item.id} tecnology={item.tecno}>
                        <CardHeader {...item} />
                        <CardBody>{item.desc}</CardBody>
                        <CardFooter>
                           <LinkTo
                              className='text-sky-500 hover:bg-sky-50'
                              to={item.url}>
                              ir al sistemas
                           </LinkTo>
                        </CardFooter>
                     </Card>
                  )
            )}
         </SystemContainer>

         <SystemContainer
            env='desarrollo'
            show={desarrollo}
            toggler={togglerDesarrollo}>
            {systemList.map(
               item =>
                  item.env === 'dev' && (
                     <Card key={item.id} tecnology={item.tecno}>
                        <CardHeader {...item} isDev />
                        <CardBody>{item.desc}</CardBody>
                        <CardFooter>
                           <LinkTo
                              className='text-sky-500 hover:bg-sky-50'
                              to={item.url}>
                              ir al sistemas
                           </LinkTo>
                        </CardFooter>
                     </Card>
                  )
            )}
         </SystemContainer>
      </main>
   )
}

export default System
