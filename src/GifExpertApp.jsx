// import React from 'react' ya nohace falta importar react

import { useState } from "react"
import { AddCategory } from "./componentes/AddCategory";
import GifGrid from "./componentes/GifGrid";

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState( ['One Punch', 'Dragon Ball'] );

    const onAddCategory = (value) =>{
        
        if(categories.includes(value)) return; //esto dice: si la condicion se cumple no hace nada más, si no sigue ejecutando
        setCategories( [value,...categories]);//punto donde se agrega la categoría 

    }

    return(
        <>

        <h1>GifExpertApp</h1>

        <AddCategory onNewValue={ (value) => onAddCategory(value) }></AddCategory>

        { categories.map( (category) => (
                <GifGrid categoryItem={category} key={category}></GifGrid>
        ))
        }
        </>
    )
}