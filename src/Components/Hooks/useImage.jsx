import {useState, useEffect} from "react"


export default function useImagePromise(switches,length,formats) {

const [images, setImages] = useState([]);

useEffect(() => {
    importImages(switches,length,formats)
        .then((src) => {
        setImages(src.filter((item) => item !== undefined)); // Filter out errors from the result array
        })
        .catch((err) => console.log(err));
    }, []);

    function importImages (switches,length,formats) {
        const promises = [];
        for (let index = 1; index <= length; index++) {
            formats.forEach((format)=>{
                promises.push(
                    switches(format,index)
                    .then((result) => result.default)
                    .catch((err) => undefined)
                );
            })
        }

        return Promise.all(promises);
    }

    return images
}


