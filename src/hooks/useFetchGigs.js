import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGigs = (category) => {
    
    const [state,setState]= useState({
        data:[],
        loading:true
    }); //carga por defecto la 1°
    
    useEffect(() => { //Para que se realice una sola peticion
        getGifs(category)
        .then(imgs=>
            {
                
            setState({
                data:imgs,
                loading:false
            })
                
            });
    }, [category]) //warning(agregar category):React Hook useEffect tiene una dependencia faltante: 'categoría'. Inclúyalo o elimine la matriz de dependencia


   
    return state;
}
