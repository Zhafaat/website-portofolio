import React from 'react'

// components
import TestimonialSlider from '../components/TestimonialSlider'

const Testimonials = () => {
  return (
    <div className=' h-full bg-primary/30 text-center'>
      <div className=' container mx-auto h-full pt-[150px] xl:pt-[100px]'>
        <div className=' h-full flex flex-col overflow-y-auto pb-0 sm:pb-20 xl:pb-0'>
          <div className=' container m-auto '>
            {/* title */}
            <h2 className=' h2 mb-8 xl:mb-0'>
              What clients <span>say.</span>
            </h2>
            {/* slider */}
            <div>
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials