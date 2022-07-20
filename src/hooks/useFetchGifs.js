import { useEffect, useState} from "react";
import { getGif } from "../helpers/getGif";


export const useFetchGifs = (categoryItem) =>{

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async() =>{
        const newImages = await getGif(categoryItem);
        setImages(newImages);
        setisLoading(false);
    };

    useEffect(()=>{
        getImages();
    },[])

    return{
        images:images,
        isLoading:isLoading
    }
}