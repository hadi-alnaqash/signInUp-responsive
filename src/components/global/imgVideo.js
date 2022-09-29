import '../global/globalStyle.css'
import image from '../../assets/airPlane.png'
// import airport from '../../assets/airport.mp4'
import playIcon from '../../assets/playIcon.png'
import { useState } from 'react'

const ImageVideo = () => {
    const [isPlay, setIsPlay] = useState(false)
    return ( 
        <>
            {/* <video id={isPlay ? "" : "none"} src={airport} autoPlay loop muted /> */}
            <iframe id={isPlay ? "" : "none"}  src="https://www.youtube.com/embed/m8n2o3Qx504?autoplay=1&mute=1"/>
            <img id={isPlay ? "none" : ""} src={image} alt="image" />
            <img id={isPlay ? "none" : ""} src={playIcon} alt="playIcon" onClick={() => setIsPlay(true)}/>
        </>
     );
}
 
export default ImageVideo;