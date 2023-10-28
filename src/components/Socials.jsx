// icons
import { RiYoutubeLine, RiInboxLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine } from 'react-icons/ri'

// react-router-dom
import { Link } from 'react-router-dom'

const Socials = () => {
  return (
    <div className=' flex items-center gap-x-5 text-lg'>
      <Link href={''} className=' hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={''} className=' hover:text-accent transition-all duration-300'>
        <RiInboxLine />
      </Link>
      <Link href={''} className=' hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={''} className=' hover:text-accent transition-all duration-300'>
        <RiDribbbleLine />
      </Link>
      <Link href={''} className=' hover:text-accent transition-all duration-300'>
        <RiBehanceLine />
      </Link>
      <Link href={''} className=' hover:text-accent transition-all duration-300'>
        <RiPinterestLine />
      </Link>
      
    </div>
  )
}

export default Socials