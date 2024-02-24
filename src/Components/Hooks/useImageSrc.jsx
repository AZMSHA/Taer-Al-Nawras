import { useEffect,useState} from "react"

export default function useImageSrc(source,length,formats) {
    const [images, setImages] = useState([])

    useEffect(()=>{
        setImages(fetchImages(source,length,formats))
    },[source,length])

    const fetchImages = (source,length,formats) => {
        const list = []
        for (let index = 1; index <= length; index++) {
            formats.forEach((format)=>{
                const src = source + index + "." + format
                list.push(src)
            })
        }
        return list
    }

    return images
}