// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../helper/variants' 

// icons
import { BsArrowRight } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className=' h-full bg-primary/30'>
        <div className=' container mx-auto text-center xl:text-left h-full pt-[150px] xl:pt-[100px] pb-24'>
            <div className=' h-full flex flex-col overflow-y-auto'>
                {/* text & form */}
                <div className=' container m-auto w-full max-w-[700px]'>
                    {/* text */}
                    <motion.h2 
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className=' h2 text-center mb-12'
                    >
                        Let's <span className=' text-accent'>Connect.</span>
                    </motion.h2>
                    {/* form */}
                    <motion.form 
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className=' flex-1 flex flex-col gap-6 w-full mx-auto'
                    >
                        {/* input group */}
                        <div className=' flex gap-x-6 w-full'>
                            <input type="text" placeholder='name' className=' input' />
                            <input type="email" placeholder='email' className=' input'/>
                        </div>
                        <input type="text" placeholder='subject' className=' input'/>
                        <textarea name="message" id="message" placeholder='message' className=' textarea'></textarea>
                        <button className=' btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                            <span className=' group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's talk</span>
                            <BsArrowRight className=' translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[22px]' />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact