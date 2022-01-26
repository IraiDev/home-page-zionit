import { Input } from '../components/Input'
import { useForm } from '../hooks/useFrom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Button from '../components/Button'
import login_img from '../assets/img/login.jpg'

const Login = () => {
  const [{ user }, onChange] = useForm({ user: '' })
  const { login } = useContext(AppContext)

  const onSubmit = e => {
    e.preventDefault()
    window.localStorage.setItem('user-zionit-validate', user)
    login({ user })
  }

  return (
    <main className='h-screen min-w-full grid content-center justify-center relative'>
      <img
        className='w-full h-full object-cover absolute'
        src={login_img}
        alt='bg-img-login'
      />
      <div className='bg-zinc-300/50 h-full w-full absolute' />
      <div className='w-96 bg-white shadow-2xl shadow-black/30 p-10 rounded-xl z-20'>
        <header className='mb-5'>
          <h1 className='text-xl font-semibold'>Bienvenido</h1>
        </header>
        <form onSubmit={onSubmit} className='grid gap-6'>
          <p className='text-zinc-500'>Inicie sesion con su usuario RA</p>
          <Input
            id='user'
            field='Usuario'
            name='user'
            value={user}
            onChange={onChange}
          />
          <Button color='blue' rounded='medium' isShadow width='w-full'>
            Ingresar
          </Button>
        </form>
      </div>
    </main>
  )
}

export default Login
