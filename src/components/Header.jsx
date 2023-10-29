// react-router-dom
import { Link } from 'react-router-dom'

// assets
import logo from '../assets/logo.png'

// components
import Socials from '../components/Socials'

const Header = () => {
  return (
    <header className=' absolute z-20 w-full flex items-center px-16 xl:px-0'>
        <div className=' container mx-auto'>
            <div className=' flex flex-col lg:flex-row justify-between items-center'>
                {/* logo */}
                <Link className=' flex items-center h-[100px]'>
                    <img src={logo} width={150} alt=""/>
                </Link>
                {/* sosial */}
                <Socials />
            </div>
        </div>
        
    </header>
  )
}

export default Header