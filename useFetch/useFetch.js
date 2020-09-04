import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {

    // se usa para mantener la referencia del estado true.
    const isMounted = useRef(true);

    const [state, setState] = useState({data: null , loading: true, error:null});

    // si la referencia se desmonte este cambia a false.
    useEffect(()=>{
        return ()=>{
            isMounted.current =false;
        }

    },[])
    useEffect( ()=>{
        //se hace para que cada ves que se haga click en el btn sgte, este arroge un h1 de loading.
        setState({data: null , loading: true, error:null})
        
        fetch(url)
            .then(resp => resp.json())
            .then(data =>{

                    // si esta True. la llama.
                    if(isMounted.current){

                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    }
            })
    },[url])

    return state;
}
