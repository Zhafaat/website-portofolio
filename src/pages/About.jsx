import React from 'react'

// components
import Circles from '../components/Circles'

// counter
import CountUp from 'react-countup'

const About = () => {
  return (
    <div className=' h-full bg-primary/30 pt-[150px] lg:pt-[100px] text-center xl:text-left'>
        <Circles />
        <div className=' container mx-auto w-[50%] h-full flex flex-col xl:flex-row gap-x-6 overflow-y-auto pb-20 xl:pb-10'>
            {/* text */}
            <div className=' flex-1 flex flex-col'>
                <h2 className=' h2'>
                    Captivating <span className=' text-accent'>strories</span> birdth magnificent designs.
                </h2>
                <p className=' max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2'>
                    10 years ago, I began freelancing as a developer. Since then, I've done remote work for agencies, counsulted for startups, and collaborated on digital products for business and consumer use.
                </p>
                {/* counters */}
                <div className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
                    <div className=' flex flex-1 xl:gap-x-6'>
                        {/* experience */}
                        <div className=' relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                            <div className=' text-2xl xl:text-4xl font-extrabold text-accent mv-2'>
                                <CountUp start={0} end={10} duration={5} /> +
                            </div>
                            <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>years of experience</div>
                        </div>
                        {/* clients */}
                        <div className=' relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                            <div className=' text-2xl xl:text-4xl font-extrabold text-accent mv-2'>
                                <CountUp start={0} end={250} duration={5} /> +
                            </div>
                            <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>
                        </div>
                        {/* projects */}
                        <div className=' relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                            <div className=' text-2xl xl:text-4xl font-extrabold text-accent mv-2'>
                                <CountUp start={0} end={650} duration={5} /> +
                            </div>
                            <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>finished projects</div>
                        </div>
                        {/* awards */}
                        <div className=' relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                            <div className=' text-2xl xl:text-4xl font-extrabold text-accent mv-2'>
                                <CountUp start={0} end={8} duration={5} /> +
                            </div>
                            <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>wining awards</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* info */}
            <div>

            </div>
        </div>
    </div>
  )
}

export default About