import React from 'react'

// components
import Circles from '../components/Circles'
import WorkSlider from '../components/WorkSlider'

const Works = () => {
  return (
    <div className=' h-full bg-primary/30'>
        <Circles />
        <div className=' h-full container mx-auto pt-[150px] lg:pt-[100px]'>
            <div className=' h-full flex flex-col items-center justify-center xl:flex-row gap-x-8 '>
                {/* text */}
                <div className=' text-center xl:text-left flex flex-col xl:w-[30vm] mb-4 xl:mb-0'>
                    <h2 className=' h2 xl:mt-12'>
                        My Work <span className=' text-accent'>.</span>
                    </h2>
                    <p className=' mb-4 max-w-[400px] mx-auto lg:mx-0'>
                    My portfolio illustrates my commitment to staying up-to-date with the latest web development technologies and best practices, resulting in modern and efficient websites.
                    </p>
                </div>
                {/* slider */}
                <div className=' w-full xl:max-w-[65%]'>
                    <WorkSlider />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works