// assets
import avatar from '../assets/avatar.png'

const Avatar = () => {
  return (
    <div className=' hidden xl:flex xl:max-w-none'>
      <img src={avatar} alt="" className=' translate-z-0' />
    </div>
  )
}

export default Avatar