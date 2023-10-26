import React, { useState } from 'react';


export const AddCategory =({onNewCategory}) => {
//establecer valor inicial
    const [inputValue, setInputValue] = useState('');

   const onInputChange = ({target}) => {
    //console.log(target.value);
    setInputValue(target.value);
   }

   const onSubmit = (event) => {
    event.preventDefault();
    console.log(onNewCategory);
    if(inputValue.trim().length <= 1) return;
    //setCategories ( categories => [inputValue, ... categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
   }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
            type='text'
            placeholder='Buscar Gif'
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
    )

}

