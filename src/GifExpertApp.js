import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGridd } from './components/GifGridd';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Dragon Ball Z']);

    // const handleAdd = ()=>{
    //     // setCategorias([...categorias,'Pokemon']);
    //     setCategorias(categ=>[...categorias,'Pokemon'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> Lo reemplazo por AddCategoty */}
            <ol>
                {
                    categorias.map(category => { 
                    // categorias.map((category,i)=>{
                        // return <li >{categorias[i]}</li>
                        // return <li key={category}>{category}</li> reemplazado por GifGridd
                        return <GifGridd 
                            key={category}
                            category={category}/>
                    })
                }
            </ol>
        </>
    )
}
