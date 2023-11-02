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
    SiNodedotjs,
    SiSequelize,
    SiPostgresql,
    SiTailwindcss,
    SiExpress
  } from "react-icons/si";
  
  
  //  data
  const aboutData = [
    {
      title: 'skills',
      info: [
        {
          title: 'FrontEnd Web',
          icons: [
            <FaHtml5 />,
            <FaCss3 />,
            <FaJs />,
            <FaReact />,
            <SiTailwindcss />,
          ],
        },
        {
          title: 'BackEnd Web',
          icons: [
            <SiNodedotjs />,
            <SiPostgresql />,
            <SiSequelize />,
            <SiExpress />,
          ],
        },
      ],
    },
    {
      title: 'awards',
      info: [
        // {
        //   title: 'Webby Awards - Honoree',
        //   stage: '2011 - 2012',
        // },
        // {
        //   title: 'Adobe Design Achievement Awards - Finalist',
        //   stage: '2009 - 2010',
        // },
      ],
    },
    {
      title: 'experience',
      info: [
        {
          title: 'Web Developer - Freelance',
          stage: '2022 - 2023',
        },
        // {
        //   title: 'Web Developer - STIBA Makassar',
        //   stage: '2023',
        // }
      ],
    },
    {
      title: 'credentials',
      info: [
        // {
        //   title: 'Web Development - ABC University, LA, CA',
        //   stage: '2011',
        // },
        {
          title: 'Bachelor of Science in Physics - Hasanuddin University',
          stage: '2022',
        },
        // {
        //   title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        //   stage: '2006',
        // },
      ],
    },
  ];

// components
import Circles from '../components/Circles'

// counter
import CountUp from 'react-countup'

// react
import { useState } from "react";

// framer motion 
import { motion } from 'framer-motion';
import { fadeIn } from '../helper/variants'

const About = () => {
    const [index, setIndex] = useState(0)

  return (
    <div className=' h-full bg-primary/30 text-center xl:text-left'>
        <Circles />
        <div className=" w-full h-full pt-[150px] lg:pt-[100px] pb-20 xl:pb-3">
          <div className=' mx-auto h-full flex overflow-y-auto'>
            <div className=" container m-auto flex flex-col xl:flex-row gap-x-6">
              {/* text */}
              <div className=' flex-1 flex flex-col z-10'>
                  <motion.h2 
                      className=' h2 cursor-text'
                      variants={fadeIn('right', 0.2)}
                      initial='hidden'
                      animate='show'
                      exit='hidden'
                  >
                      From great <span className=" text-accent">stories</span> emerge amazing creations.
                  </motion.h2>
                  <motion.p 
                      className=' max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2'
                      variants={fadeIn('right', 0.4)}
                      initial='hidden'
                      animate='show'
                      exit='hidden'
                  >
                      One year ago, I embarked on my journey in the programming world as a web developer. Since then, I have worked on websites for a private university and collaborated on digital products for both business and consumer purposes.
                  </motion.p>
                  {/* counters */}
                  <motion.div 
                      className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
                      variants={fadeIn('right', 0.6)}
                      initial='hidden'
                      animate='show'
                      exit='hidden'
                  >
                      <div className=' flex flex-1 xl:gap-x-6'>
                          {/* experience */}
                          <div className=' relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                              <div className=' text-2xl xl:text-4xl font-extrabold text-accent mv-2'>
                                  <CountUp start={0} end={1} duration={5} /> +
                              </div>
                              <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>years of experience</div>
                          </div>
                          {/* clients */}
                          {/* <div className=' relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                              <div className=' text-2xl xl:text-4xl font-extrabold text-accent mv-2'>
                                  <CountUp start={0} end={0} duration={5} /> +
                              </div>
                              <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>
                          </div> */}
                          {/* projects */}
                          <div className=' relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                              <div className=' text-2xl xl:text-4xl font-extrabold text-accent mv-2'>
                                  <CountUp start={0} end={10} duration={5} /> +
                              </div>
                              <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>finished projects</div>
                          </div>
                          {/* awards */}
                          {/* <div className=' relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                              <div className=' text-2xl xl:text-4xl font-extrabold text-accent mv-2'>
                                  <CountUp start={0} end={0} duration={5} /> +
                              </div>
                              <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>wining awards</div>
                          </div> */}
                      </div>
                  </motion.div>
              </div>
              {/* info */}
              <motion.div 
                  className=" flex flex-col w-full xl:max-w-[48%] h-fit pt-0 xl:pt-5"
                  variants={fadeIn('left', 0.2)}
                      initial='hidden'
                      animate='show'
                      exit='hidden'
              >
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
                  <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                      {aboutData[index].info.map((item, itemIndex) => {
                          return (
                              <div 
                                  key={itemIndex}
                                  className=" flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"    
                              >
                                  {/* title */}
                                  <div className=" font-light mb-2 md:mb-0">{item.title}</div>
                                  <div className=" hidden xl:flex">-</div>
                                  <div>{item.stage}</div>
                                  <div className=" flex gap-x-4">
                                      {/* icons */}
                                      {item.icons?.map((icon, iconIndex) => {
                                          return <div key={iconIndex} className=" text-2xl text-white">{icon}</div>
                                      })}
                                  </div>
                              </div>
                          )
                      })}
                  </div>
              </motion.div>

            </div>
          </div>

        </div>
    </div>
  )
}

export default About