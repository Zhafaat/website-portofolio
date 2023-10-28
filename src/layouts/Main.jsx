// react-router-dom
import { Outlet } from 'react-router-dom'

// components
import TopLeftImg from '../components/TopLeftImg'
import Nav from '../components/Nav'
import Header from '../components/Header'

const Main = () => {
  return (
    <div className=' page bg-site text-white bg-cover bg-no-repeat font-sora relative'>
        <TopLeftImg />
        <Nav />
        <Header />
        <Outlet />
    </div>
  )
}

export default Main