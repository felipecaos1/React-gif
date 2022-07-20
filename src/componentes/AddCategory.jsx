import { useState } from "react"

export const AddCategory = ({onNewValue}) =>{

    const [inputVAlue, setinputValue] = useState('');

    const onInputChange = (Event) =>{
        setinputValue( Event.target.value)
    }

    const onSubmit =(Event) =>{
        if( inputVAlue.trim().length<=1) return;
        
        // onAddCategory((cat)=>[inputVAlue, ...cat]);
        onNewValue(inputVAlue.trim());
        setinputValue('');
        Event.preventDefault();//para evitar que se recargue el navegador
    }
    return(
        <form onSubmit={onSubmit}>

            <input 
            type="text"
            placeholder="Category"
            value={ inputVAlue }
            // onChange={ (Event) => onInputChange(Event) } 
            onChange={ onInputChange } 
            />

        </form>
    )
}