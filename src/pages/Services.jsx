// components
import Circles from '../components/Circles'
import ServiceSlider from '../components/ServiceSlider'

const Services = () => {
  return (
    <div className=' h-full bg-primary/30'>
        <Circles />
        <div className=' h-full container mx-auto pt-[150px] lg:pt-[100px]'>
            <div className=' h-full flex flex-col xl:items-center xl:flex-row gap-x-8 overflow-y-auto pb-24 xl:pb-0'>
                {/* text */}
                <div className=' text-center xl:text-left flex xl:w-[30vm] flex-col mb-4 xl:mb-0'>
                    <h2 className=' h2'>
                        My Service <span className=' text-accent'>.</span>
                    </h2>
                    <p className=' mb-4 max-w-[400px] mx-auto xl:mx-0'> 
                        Web developers play a crucial role in designing and maintaining the digital services that power the internet, ensuring seamless user experiences and the functionality of websites and web applications. Their expertise in coding, design, and troubleshooting is essential for delivering high-quality online services to users worldwide.
                    </p>
                </div>
                {/* slider */}
                <div className=' w-full bg-1 xl:max-w-[65%]'>
                    <ServiceSlider />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services