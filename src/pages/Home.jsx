// components
import ProjectsBtn from "../components/ProjectsBtn"


const Home = () => {
  return (
    <div className=" bg-primary/60 h-full ">
        {/* text */}
        <div className=" w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/30">
            <div className=" text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
                {/* title  */}
                <h1 className=" h1">
                <span className=" hidden xl:inline">Building </span>Quality Website <br />  is a{' '} <span className=" text-accent">Valuable Investment.</span>
                </h1>
                {/* subtitel */}
                <p className=" max-w-xl hidden xl:block mx-auto xl:mx-0 mb-10 xl:mb-16">
                In today's digital era, web development is the foundation of business change and online transformation. As a web development team, we understand the importance of digitization and automation. We invite you to explore our portfolio, showcasing a variety of projects that demonstrate our dedication and innovation. From impressive websites to advanced applications, we're here to help you harness the full potential of the digital age. Welcome to the ever-evolving world of web development.
                </p>
                <p className=" max-w-sm block xl:hidden mx-auto xl:mx-0 mb-10 xl:mb-16">
                In the digital era, web development is the key to success and automation in the world of work. Through our portfolio, we aim to showcase the impact of our innovation and dedication. Explore our impressive projects, and let's together unlock the full potential in this digital age.
                </p>
                {/* btn */}
                <div className=" flex justify-center xl:hidden relative z-10">
                    <ProjectsBtn />
                </div>
                <div className=" hidden xl:flex">
                    <ProjectsBtn />
                </div>
            </div>
        </div>
        {/* image */}
    </div>
  )
}

export default Home