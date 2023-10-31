// data
const workSlides = {
    slides: [
      {
        images: [
          {
            title: 'title',
            path: '/thumb1.jpg',
          },
          {
            title: 'title',
            path: '/thumb2.jpg',
          },
          {
            title: 'title',
            path: '/thumb3.jpg',
          },
          {
            title: 'title',
            path: '/thumb4.jpg',
          },
        ],
      },
      {
        images: [
          {
            title: 'title',
            path: '/thumb4.jpg',
          },
          {
            title: 'title',
            path: '/thumb1.jpg',
          },
          {
            title: 'title',
            path: '/thumb2.jpg',
          },
          {
            title: 'title',
            path: '/thumb3.jpg',
          },
        ],
      },
    ],
  };

// swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// icons
import { BsArrowRight } from 'react-icons/bs'

const WorkSlider = () => {
  return (
    <Swiper>
        {workSlides.slides.map((slide, slideIndex) => {
            return (
                <SwiperSlide key={slideIndex}>
                    <div>
                        {slide.images.map((image, imageIndex) => {
                            return (
                                <div key={imageIndex}>
                                    <div>
                                        {/* image */}
                                        <img src={image.path} alt="" />
                                        <div></div>
                                        {/* title */}
                                        <div>
                                            <div>
                                                {/* title part 1 */}
                                                <div>LIVE</div>
                                                {/* title part 2 */}
                                                <div>PROJECT</div>
                                                {/* icon */}
                                                <div><BsArrowRight /></div>
                                            </div>
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