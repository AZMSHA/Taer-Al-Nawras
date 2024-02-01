import img1 from "../assets/imageStrip1.jpg"
import img2 from "../assets/imageStrip2.png"
import img3 from "../assets/imageStrip3.png"

const Image = import("../assets/imageStrip1.jpg")
console.log(Image.then((result)=>{result.default}))
const Strip = () => {
    const images = [img2,img1,img3,]
   return (
        <>
        {images.map((image)=><img key={image} onLoad={console.log("loaded")} src={image}/>)}
        </>
    )
  }

export default Strip