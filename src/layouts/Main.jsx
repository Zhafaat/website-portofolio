// react-router-dom
import { useLocation, Outlet } from 'react-router-dom'

// components
import TopLeftImg from '../components/TopLeftImg'
import Nav from '../components/Nav'
import Header from '../components/Header'

// frame motion
import { AnimatePresence } from 'framer-motion'

const Main = () => {
  const location = useLocation()

  return (
    <div key={location.pathname} className=' page bg-site text-white bg-cover bg-no-repeat bg-center font-sora relative'>
        <TopLeftImg />
        <Nav />
        <Header />
        <Outlet />
    </div>
  )
}

export default Main