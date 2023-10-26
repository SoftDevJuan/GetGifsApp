import { getGifs } from "../helpers/getGifs"
import { useEffect, useState } from "react";



export const GifGrid = ({category}) => {

    useEffect(() =>{
        getGifs(category);
    }, [])
    
    return(
        <>
        <h3>{category}</h3>
        </>
    )
}