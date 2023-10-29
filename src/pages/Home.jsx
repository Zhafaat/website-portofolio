// components
import ProjectsBtn from "../components/ProjectsBtn"
import ParticlesContainer from '../components/ParticlesContainer'
import Avatar from "../components/Avatar"

// framer motion
import { motion } from 'framer-motion'

// varians
import { fadeIn } from '../helper/variants'


const Home = () => {
  return (
    <div className=" h-full bg-primary/60 m-0">
        {/* text */}
        <div className=" w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/30 pt-[150px] lg:pt-[100px] relative z-10">
            <div className=" text-center flex flex-col xl:text-left h-full overflow-y-auto container mx-auto pb-24 xl:pb-5">
                {/* title  */}
                <motion.h1
                    variants={fadeIn('down', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className=" h1"
                >
                <span className=" hidden xl:inline">Building </span>Quality Website <br />  is a{' '} <span className=" text-accent">Valuable Investment.</span>
                </motion.h1>
                {/* subtitel */}
                <motion.p 
                    variants={fadeIn('down', 0.3)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className=" max-w-xl hidden xl:block mx-auto xl:mx-0 mb-10"
                >
                In today's digital era, web development is the foundation of business change and online transformation. As a web development team, we understand the importance of digitization and automation. We invite you to explore our portfolio, showcasing a variety of projects that demonstrate our dedication and innovation. From impressive websites to advanced applications, we're here to help you harness the full potential of the digital age. Welcome to the ever-evolving world of web development.
                </motion.p>
                <motion.p 
                    variants={fadeIn('down', 0.3)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className=" max-w-sm block xl:hidden mx-auto xl:mx-0 mb-10 xl:mb-16"
                >
                In the digital era, web development is the key to success and automation in the world of work. Through our portfolio, we aim to showcase the impact of our innovation and dedication. Explore our impressive projects, and let's together unlock the full potential in this digital age.
                </motion.p>
                {/* btn */}
                <motion.div
                    variants={fadeIn('down', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden' 
                    className=" flex justify-center xl:hidden relative z-10"
                >
                    <ProjectsBtn />
                </motion.div>
                <motion.div 
                    variants={fadeIn('down', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className=" hidden xl:flex z-10"
                >
                    <ProjectsBtn />
                </motion.div>
            </div>
        </div>
        {/* image */}
        <div className=' w-full h-full absolute z-0 right-0 bottom-0'>
            {/* bg img */}
            <ParticlesContainer />
        </div>
        <motion.div 
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className=" w-[40%] h-[80%] absolute z-10 flex items-center overflow-hidden brightness-75 hover:brightness-100 bottom-0 lg:right-[5%]"
        >
            <Avatar />
        </motion.div>
    </div>
  )
}

export default Home