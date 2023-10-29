// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
  } from "react-icons/fa";
  
  import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
  } from "react-icons/si";
  
  
  //  data
  const aboutData = [
    {
      title: 'skills',
      info: [
        {
          title: 'Web Development',
          icons: [
            <FaHtml5 />,
            <FaCss3 />,
            <FaJs />,
            <FaReact />,
            <SiNextdotjs />,
            <SiFramer />,
            <FaWordpress />,
          ],
        },
        {
          title: 'UI/UX Design',
          icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
        },
      ],
    },
    {
      title: 'awards',
      info: [
        {
          title: 'Webby Awards - Honoree',
          stage: '2011 - 2012',
        },
        {
          title: 'Adobe Design Achievement Awards - Finalist',
          stage: '2009 - 2010',
        },
      ],
    },
    {
      title: 'experience',
      info: [
        {
          title: 'UX/UI Designer - XYZ Company',
          stage: '2012 - 2023',
        },
        {
          title: 'Web Developer - ABC Agency',
          stage: '2010 - 2012',
        },
        {
          title: 'Intern - DEF Corporation',
          stage: '2008 - 2010',
        },
      ],
    },
    {
      title: 'credentials',
      info: [
        {
          title: 'Web Development - ABC University, LA, CA',
          stage: '2011',
        },
        {
          title: 'Computer Science Diploma - AV Technical Institute',
          stage: '2009',
        },
        {
          title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
          stage: '2006',
        },
      ],
    },
  ];

// components
import Circles from '../components/Circles'

// counter
import CountUp from 'react-countup'

// react
import { useState } from "react";

const About = () => {
    const [index, setIndex] = useState(0)

  return (
    <div className=' h-full bg-primary/30 pt-[150px] lg:pt-[100px] text-center xl:text-left'>
        <Circles />
        <div className=' container mx-auto h-full flex flex-col xl:flex-row items-center justify-center gap-x-6 overflow-y-auto pb-20 xl:pb-5'>
            {/* text */}
            <div className='flex-1 flex flex-col'>
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
            <div className=" flex flex-col w-full xl:max-w-[48%] h-[480px]">
                <div className=" flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                    {aboutData.map((item, itemIndex) => {
                        return (
                            <div 
                                key={itemIndex}
                                className={` ${index === itemIndex ? ' text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300' : ' after:w-8 after:bg-white'} cursor-pointer font-semibold capitalize xl:text-lg relative after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
                                onClick={() => setIndex(itemIndex)}
                            >
                                {item.title}
                            </div>
                        )
                    })}
                </div>
                <div>
                    {aboutData[index].info.map((item, itemIndex) => {
                        return (
                            <div key={itemIndex}>
                                {/* title */}
                                <div>{item.title}</div>
                                <div>-</div>
                                <div>{item.stage}</div>
                                <div>
                                    {/* icons */}
                                    {item.icons?.map((icon, iconIndex) => {
                                        return <div key={iconIndex}>{icon}</div>
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About