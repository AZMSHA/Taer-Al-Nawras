import {useState, useEffect} from "react"


export default function useImagePromise(source,length,formats) {

const [images, setImages] = useState([]);

useEffect(() => {
    importImages(source,length,formats)
        .then((src) => {
        setImages(src.filter((item) => item !== undefined)); // Filter out errors from the result array
        })
        .catch((err) => console.log(err));
    }, []);

    function importImages (source,length,formats) {
        const promises = [];
        for (let index = 1; index <= length; index++) {
            formats.forEach((format)=>{
                promises.push(
                    import(`../${source + index + "." + format}`)
                    .then((result) => result.default)
                    .catch((err) => undefined)
                );
            })
        }

        return Promise.all(promises);
    }

    return images
}