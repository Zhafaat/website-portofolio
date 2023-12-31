// components
import Circles from '../components/Circles'
import WorkSlider from '../components/WorkSlider'

// framer motion 
import { motion } from 'framer-motion'
import { fadeIn } from '../helper/variants'

const Works = () => {
  return (
    <div className=' h-full bg-primary/30'>
        <Circles />
        <div className=' w-full h-full pt-[150px] lg:pt-[100px] pb-20 xl:pb-0'>
            <div className=' mx-auto h-full flex overflow-y-auto'>
                <div className=' container m-auto flex flex-col xl:flex-row gap-x-8 '>
                    {/* text */}
                    <div className=' text-center xl:text-left flex flex-col xl:w-[30vm] mb-4 xl:mb-0'>
                        <motion.h2 
                            variants={fadeIn('up', 0.2)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className=' h2'
                        >
                            My Work <span className=' text-accent'>.</span>
                        </motion.h2>
                        <motion.p 
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className=' mb-4 max-w-[400px] mx-auto xl:mx-0'
                        >
                        My portfolio illustrates my commitment to staying up-to-date with the latest web development technologies and best practices, resulting in modern and efficient websites.
                        </motion.p>
                    </div>
                    {/* slider */}
                    <motion.div 
                        variants={fadeIn('down', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className=' w-full xl:max-w-[65%]'
                    >
                        <WorkSlider />
                    </motion.div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Works