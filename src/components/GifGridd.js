// import React,{useState,useEffect} from 'react'
import React from 'react'
import { useFetchGigs } from '../hooks/useFetchGigs';
import { GifGridItem } from './GifGridItem';

export const GifGridd = ({category}) => {
    
    const {data:images,loading} = useFetchGigs(category);
  
    /*  const [images, setImages] = useState([]);
    
    useEffect(() => { //Para que se realice una sola peticion
        getGifs(category)
        // .then(img=>setImages(img));
        .then(setImages);
    }, [category]) //warning(agregar category):React Hook useEffect tiene una dependencia faltante: 'categoría'. Inclúyalo o elimine la matriz de dependencia
*/
    
    
    return (
        <>
        <h3 className="animate__animated animate__fadeIn ">{category}</h3>
        {loading && 'Cargando...'}
        <div className="card-grid animate__animated animate__flash">
            {
                    images.map( img => ( 
                    
                    <GifGridItem 
                        key={img.id} 
                        {...img}
                    />
                    ))
                }
        </div>
        </>
    )
}
