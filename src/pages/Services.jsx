// components
import Circles from '../components/Circles'
import ServiceSlider from '../components/ServiceSlider'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../helper/variants'

const Services = () => {
  return (
    <div className=' h-full bg-primary/30'>
        <Circles />
        <div className=' h-full container mx-auto pt-[150px] lg:pt-[100px]'>
            <div className=' h-full flex flex-col xl:items-center xl:flex-row gap-x-8 overflow-y-auto pb-24 xl:pb-0'>
                {/* text */}
                <div className=' text-center xl:text-left flex xl:w-[30vm] flex-col mb-4 xl:mb-0'>
                    <motion.h2 
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className=' h2'
                    >
                        My Service <span className=' text-accent'>.</span>
                    </motion.h2>
                    <motion.p 
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className=' mb-4 max-w-[400px] mx-auto xl:mx-0'
                    > 
                        Web developers play a crucial role in designing and maintaining the digital services that power the internet, ensuring seamless user experiences and the functionality of websites and web applications. Their expertise in coding, design, and troubleshooting is essential for delivering high-quality online services to users worldwide.
                    </motion.p>
                </div>
                {/* slider */}
                <motion.div 
                    variants={fadeIn('down', 0.6)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className=' w-full bg-1 xl:max-w-[65%]'
                >
                    <ServiceSlider />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Services