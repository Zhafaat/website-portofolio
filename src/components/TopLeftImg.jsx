// assets
import topLeftImg from '../assets/top-left-img.png'

const TopLeftImg = () => {
  return (
    <div className=' absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50'>
        <img src={topLeftImg} width={400} height={400} alt="" />
    </div>
  )
}

export default TopLeftImg