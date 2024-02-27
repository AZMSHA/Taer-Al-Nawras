import Button from "../../../Components/Button/button";
import useImagePromise from "../../../Components/Hooks/useImage";
import "./Styles/Services.scss"


export default function Services (){

  const switches = (format,index)=>{
    switch (format) {
        case "png":
            return import(`../assets/Services${index}.png`);
        case "jpg":
            return import(`../assets/Services${index}.jpg`);
        case "webp":
            return import(`../assets/Services${index}.webp`);
        default:
            return new Promise((resolve, reject) => {
                if (false) {
                    resolve (format)
                }
                reject(format) })
    }
  }

  const images = useImagePromise(switches,3,["jpg","webp","png"])


    const data = {
        set1:["Outdoor Signage"
            ,"Building Signage",
            "3D Sign Boards",
            "Totem Signs",
            "Neon Effect Signs",
            "Shop Front Signboards",
            "Rooftop",
            "Acrylic Sign Board",],

        set2:["Digital Signage",
            'Flexible Led Display',
            'Indoor Display',
            'Outdoor LED Display',
            'Led Screen',
            '3D Led Signage',
            'Video Wall',
            'Digital Kiosk',],

        set3:['Indoor Signage'
            ,'Wayfinding Signs'
            ,'Informational Signs'
            ,'Directional Signs'
            ,'Safety Signs'
            ,'Reception Area Signs'
            ,'Room Identification Signs'
            ,'Elevator and Escalator Signs',],
    }

    const Lists = []

    for (let index = 1; index < 4; index++) {
        const list = data[`set${index}`];
        Lists.push(
            <section key={index}>
                <img src={images[index-1]} alt="" />
                <div className="backdrop">
                    <header><h2 className="gold-color">{list[0]}</h2></header>
                    <ul>
                    {list.map((link,index)=>{
                        if(index){
                            return <li key={index}>{link}</li>
                        }
                    })}
                    </ul>
                </div>
            </section>
        )
    };

    return(
    <>
      <section id="services">
        <h1>OUR SERVICES</h1>
        {Lists}
        <div className="btn-area"><Button Class={"btn-pri-w"}>Learn more!</Button></div>
      </section>
    </>)
}
