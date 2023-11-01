// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../helper/variants'
// components
import TestimonialSlider from '../components/TestimonialSlider'

const Testimonials = () => {
  return (
    <div className=' h-full bg-primary/30 text-center'>
      <div className=' w-full h-full pt-[150px] xl:pt-[100px] pb-20 xl:pb-0'>
        <div className=' h-full flex flex-col overflow-y-auto pb-0 mx-auto'>
          <div className=' container m-auto '>
            {/* title */}
            <motion.h2 
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className=' h2 mb-8 xl:mb-0'
            >
              What clients <span>say.</span>
            </motion.h2>
            {/* slider */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              <TestimonialSlider />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials