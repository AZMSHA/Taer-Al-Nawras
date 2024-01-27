import img1 from "../assets/imageStrip1.jpg"
import img2 from "../assets/imageStrip2.png"
import img3 from "../assets/imageStrip3.png"
const Strip = () => {
    const images = [img1,img2,img3]
   return (
        <>
        {images.map((image)=><img key={image} src={image}/>)}
        </>
    )
  }

export default Strip