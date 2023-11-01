// icons
import { RiLinkedinLine, RiWhatsappLine, RiFacebookLine, RiGithubLine, RiMailLine, RiInstagramLine } from 'react-icons/ri'

// react-router-dom
import { Link } from 'react-router-dom'

const Socials = () => {
  return (
    <div className=' flex items-center gap-x-5 text-lg'>
      <a href='https://www.instagram.com/zhafaat_2122/' target='blank' className=' hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </a>
      <a href={'https://www.linkedin.com/in/zhafaat-rahimi-zainal/'} target='blank' className=' hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </a>
      <a href={'https://www.facebook.com/aat.aat.92102/'} target='blank' className=' hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </a>
      <a href={'https://api.whatsapp.com/send/?phone=%2B6282216709879&text&type=phone_number&app_absent=0'} target='blank' className=' hover:text-accent transition-all duration-300'>
        <RiWhatsappLine />
      </a>
      <a href={'https://github.com/Zhafaat'} target='blank' className=' hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </a>
      <Link to={'/contact'} className=' hover:text-accent transition-all duration-300'>
        <RiMailLine />
      </Link>
      
    </div>
  )
}

export default Socials