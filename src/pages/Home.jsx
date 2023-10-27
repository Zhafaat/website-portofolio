// components
import ProjectsBtn from "../components/ProjectsBtn"


const Home = () => {
  return (
    <div className=" bg-primary/60 h-full">
        {/* text */}
        <div className=" w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/30">
            <div className=" text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
                {/* title  */}
                <h1 className=" h1">
                    Transforming Ideas <br /> Into{' '} <span className=" text-accent">Digital Reality</span>
                </h1>
                {/* subtitel */}
                <p className=" max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
                    Anim cillum cillum ut dolor non eiusmod. Sint nulla deserunt quis aute minim velit. Ut in reprehenderit enim sint id elit incididunt aliqua anim. Eiusmod quis irure sunt aliqua adipisicing eiusmod laborum officia non laborum nulla amet consequat. Culpa ullamco qui veniam excepteur non commodo sunt ipsum tempor voluptate exercitation.
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