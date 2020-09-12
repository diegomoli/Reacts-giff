import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange= (e)=>{
        setinputValue(e.target.value);
    }
    const handlSubmit=(e)=>{
        e.preventDefault();
        // console.log('Submit realizado');
        
        if(inputValue.trim().length>2){

            setCategorias(cats => [inputValue,...cats]);    
            setinputValue('');
        }
    }
     return (
         <form onSubmit={handlSubmit}>
         <h2>Agregando Categoria</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
                

        </form>
    )
}
AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}