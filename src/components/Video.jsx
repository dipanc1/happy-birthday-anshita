import './video.css'
import video from './images/video.mp4'

const Video = () => {
  return (
    <div className='video'>
      <h1 className='clickhere9'>HAPPY BIRTHDAY MY BABY</h1>
      <video src={video} controls autoplay loop className='videoPlayer'></video>
      <h1 className='clickhere8'>My Sohni Cutie Baby Doll</h1>
    </div>
  )
}

export default Video