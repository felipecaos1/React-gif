// import { useEffect, useState } from "react";

import GifTarjeta from "./GifTarjeta";

// import { getGif } from "../helpers/getGif";
import { useFetchGifs } from "../hooks/useFetchGifs";



const GifGrid = ({categoryItem}) => {

    const {images, isLoading} = useFetchGifs(categoryItem); //custome hook 
    console.log(isLoading);

    
  return (
    <>
        <h3>{categoryItem}</h3>
        {
            isLoading && <h2>Cargando...</h2>
        }
        <div className="card-grid">
            {images.map((image) =>(
                <GifTarjeta 
                key={image.id}
                {...image}/>//una manera de desestructurar y eviar las propos sin nobrarlas una a una, util en caso de tener muchas 
                ))}
        </div>
    </>
  )
}

export default GifGrid
