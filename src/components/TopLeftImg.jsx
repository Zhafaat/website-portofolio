// assets
import topLeftImg from '../assets/top-left-img.png'

const TopLeftImg = () => {
  return (
    <div className=' absolute left-0 top-0 mix-blend-color-dodge animate-pulse duration-75 brightness-90 z-0 w-[200px] xl:w-[400px]'>
        <img src={topLeftImg} width={300} height={300} alt="" />
    </div>
  )
}

export default TopLeftImg