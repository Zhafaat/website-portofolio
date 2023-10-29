// assets
import avatar from '../assets/avatar.png'

import { Link } from 'react-router-dom'

const Avatar = () => {
  return (
    <Link 
      to={'/about'}
      className=' hidden xl:flex xl:max-w-none'
    >
      <img src={avatar} alt="" className=' translate-z-0' />
    </Link>
  )
}

export default Avatar