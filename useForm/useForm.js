import { useState } from "react"
 
// initialState, recibe lo atributos de FormWithCustomHook.js. Recibiendo name, email, password
export const useForm = (initialState={}) => {
// paso 1- se crea este custom hoos para evitar crear en cada  Hook que use el use effect

    const [values, setValues] = useState(initialState)

    const reset = ()=>{
        setValues(initialState);
    }
    //paso 2..
    const handleInputChange = ({ target }) =>{

        setValues({
            ...values,
            [target.name]: target.value
        })
    }
    return [values, handleInputChange, reset];
}
