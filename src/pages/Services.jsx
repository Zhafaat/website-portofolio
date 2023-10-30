// components
import Bulb from '../components/Bulb'
import Circles from '../components/Circles'
import ServiceSlider from '../components/ServiceSlider'

const Services = () => {
  return (
    <div className=' h-full bg-primary/30 flex items-center'>
        <Circles />
        <div className=' container mx-auto'>
            <div className=' flex flex-col xl:flex-row gap-x-8'>
                {/* text */}
                <div className=' text-center lg:text-left flex xl:w-[30vm] flex-col mb-4 xl:mb-0'>
                    <h2 className=' h2'>
                        My Service <span className=' text-accent'>.</span>
                    </h2>
                    <p className=' mb-4 max-w-[400px] mx-auto lg:mx-0'> 
                        Web developers play a crucial role in designing and maintaining the digital services that power the internet, ensuring seamless user experiences and the functionality of websites and web applications. Their expertise in coding, design, and troubleshooting is essential for delivering high-quality online services to users worldwide.
                    </p>
                </div>
                {/* slider */}
                <div className=' w-full xl:max-w-[65%]'>
                    <ServiceSlider />
                </div>
            </div>
        </div>
        <Bulb />
    </div>
  )
}

export default Services