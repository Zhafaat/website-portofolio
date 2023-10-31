// data
const workSlides = {
    slides: [
      {
        images: [
          {
            title: 'Modern App',
            path: 'projectA1.png',
          },
          {
            title: 'Modern App',
            path: 'projectA2.png',
          },
          {
            title: 'Modern App',
            path: 'projectA3.png',
          },
          {
            title: 'Modern App',
            path: 'projectA4.png',
          },
        ],
        link: 'https://modern-app-900d3.firebaseapp.com/'
      },
      {
        images: [
          {
            title: 'Budged App',
            path: 'projectB1.png',
          },
          {
            title: 'Budged App',
            path: 'projectB2.png',
          },
          {
            title: 'Budged App',
            path: 'projectB3.png',
          },
          {
            title: 'Budged App',
            path: 'projectB4.png',
          },
        ],
        link: 'https://budget-app-e806d.firebaseapp.com/'
      },
      {
        images: [
          {
            title: 'Calendar App',
            path: 'projectC1.png',
          },
          {
            title: 'Calendar App',
            path: 'projectC2.png',
          },
          {
            title: 'Calendar App',
            path: 'projectC3.png',
          },
          {
            title: 'Calendar App',
            path: 'projectC4.png',
          },
        ],
        link: 'https://calendar-app-39114.firebaseapp.com/'
      },
      {
        images: [
          {
            title: 'Dananz App',
            path: 'projectD1.png',
          },
          {
            title: 'Dananz App',
            path: 'projectD2.png',
          },
          {
            title: 'Dananz App',
            path: 'projectD3.png',
          },
          {
            title: 'Dananz App',
            path: 'projectD4.png',
          },
        ],
        link: 'https://dananz-da9ba.firebaseapp.com/'
      },
      {
        images: [
          {
            title: 'Office App',
            path: 'projectE1.png',
          },
          {
            title: 'Office App',
            path: 'projectE2.png',
          },
          {
            title: 'Office App',
            path: 'projectE3.png',
          },
          {
            title: 'Office App',
            path: 'projectE4.png',
          },
        ],
        link: 'https://ntx-test-f06c6.firebaseapp.com/'
      },
    ],
  };

// swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules 
import { Pagination } from 'swiper/modules'

// icons
import { BsArrowRight } from 'react-icons/bs'

const WorkSlider = () => {
  return (
    <Swiper
        spaceBetween={10}
        pagination={{
            clickable: true
        }}
        modules={[Pagination]}
        className=' h-[280px] sm:h-[480px]'
    >
        {workSlides.slides.map((slide, slideIndex) => {
            return (
                <SwiperSlide key={slideIndex}>
                    <div className=' grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>

                        {slide.images.map((image, imageIndex) => {
                            return (
                                <div 
                                    key={imageIndex}
                                    className=' relative rounded-lg  overflow-hidden flex items-center justify-center group'
                                >
                                    <div className=' flex items-center justify-center relative overflow-hidden group'>
                                        {/* image */}
                                        <img src={image.path} width={500} height={300} alt="" />
                                        <div className=' absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                                        {/* title */}
                                        <div className=' absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                                            <a href={slide.link} target="_blank" rel="noopener noreferrer">
                                                <div className=' flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                                                    {/* title part 1 */}
                                                    <div className=' delay-100'>{image.title}</div>
                                                    {/* title part 2 */}
                                                    <div className=' translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                                                    {/* icon */}
                                                    <div className=' text-xl translate-y-[500%] text-xl group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default WorkSlider