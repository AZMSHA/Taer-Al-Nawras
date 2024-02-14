import {useState, useEffect} from "react"
import Button from "../../../Components/Button/button";
import "./section3.scss"

function importImages(url, length) {

  const promises = [];

  for (let index = 1; index <= length; index++) {
    promises.push(
      import(`../assets/${url + index}.png`)
        .then((result) => result.default)
        .catch((err) => undefined)
    );

    promises.push(
      import(`../assets/${url + index}.jpg`)
        .then((result) => result.default)
        .catch((err) => undefined)
    );

    promises.push(
      import(`../assets/${url + index}.svg`)
        .then((result) => result.default)
        .catch((err) => undefined)
    );

    promises.push(
      import(`../assets/${url + index}.webp`)
        .then((result) => result.default)
        .catch((err) => undefined)
    );
  }

  return Promise.all(promises);
}

export default function Section3 (){

  const [images, setImages] = useState([]);

  useEffect(() => {

    importImages("Services", 3)
      .then((src) => {

        setImages(src.filter((item) => item !== undefined)); // Filter out errors from the result array
      })
      .catch((err) => console.log(err));
  }, []);

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
            <section style={{backgroundImage:`url(${images[index-1]})`}} key={index}>
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
      <section className="sec3">
        <h1>WHAT WE DO?</h1>
        {Lists}
        <div className="btn-area"><Button Class={"btn-pri-w"}>Learn more!</Button></div>
      </section>
    </>)
}
