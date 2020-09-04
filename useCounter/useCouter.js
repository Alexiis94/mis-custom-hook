// 4to en creacion, trabaja con el 3er 

import  { useState } from 'react'

export const useCouter = (initialState = 10) => {
    // 1- Se crea un Hooks y le define como valo inicial de 10, luego crea 2 funciones
    // uno de aumenta y el otro quita 1 al valor. se crea un objeto para Retorna el
    // state , el increment y el decrement. Luego se importa el useCouter.js en mi clase
    // CounterWithCustomHook.js.
   const [counter, setCounter] = useState(initialState) // 10
   /* Paso  6- .Si quiero usar un argument en ves de un valor en duro, se define dandole un valor factor=1
      el paso 7 en CounterWithCustomHook.js...*/
   const increment =() =>{
       setCounter(counter + 1);
   }
   
   const decrement =() =>{
    setCounter(counter - 1);
   }
   const reset =() =>{
    setCounter(initialState);
   }
   return {
       counter,
       increment,
       decrement,
       reset
   }
}
