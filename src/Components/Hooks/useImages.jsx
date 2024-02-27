import { useEffect,useState,useCallback } from "react"

export default function useImages(source,length,formats,...args) {
    const [images, setImages] = useState([])

    useEffect(()=>{
        setImages(fetchImages(source,length,formats,...args))
    },[source,length])

    const fetchImages = (source,length,formats,...args) => {

        const isLiteralObject = function(a) {
            return (!!a) && (a.constructor === Object);
        }

        let props = {}

        args.forEach((prop)=>{
            if(isLiteralObject(prop)){
                props = {...props,...prop}
            }
        })

        const list = []
        for (let index = 1; index <= length; index++) {
            formats.forEach((format)=>{
                const src = source + index + "." + format
                const img = <img {...props} key={src} onError={(e)=>e.target.remove()} src={src}/>
                list.push(img)
            })
        }
        return list
    }

    return images
}