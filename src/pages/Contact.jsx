// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../helper/variants' 

// icons
import { BsArrowRight } from 'react-icons/bs'

// react
import { useRef } from 'react'

//emailjs
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o78em8r', 'template_qjefe8o', form.current, 'KODiYHJ1EKMsCy5OA')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset()
    }


  return (
    <div className=' h-full bg-primary/30'>
        <div className=' container mx-auto text-center xl:text-left h-full pt-[150px] xl:pt-[100px] pb-24 xl:pb-5'>
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
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        {/* input group */}
                        <div className=' flex gap-x-6 w-full'>
                            <input type="text" name='name' placeholder='name' className=' input' required />
                            <input type="email" name='email' placeholder='email' className=' input' required/>
                        </div>
                        <input type="text" name='subject' placeholder='subject' className=' input' required/>
                        <textarea name="message" id="message" placeholder='message' className=' textarea' required></textarea>
                        <button type='submit' value="Send" className=' btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden hover:border-accent group'>
                            <span className=' group-hover:-translate-y-10 translate-y-3 group-hover:opacity-0 transition-all duration-500'>Let's talk</span>
                            <BsArrowRight className=' translate-y-10 opacity-0 group-hover:flex group-hover:-translate-y-3 group-hover:opacity-100 transition-all duration-500 text-[22px]' />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact