import {useEffect, useLayoutEffect} from "react";

const LayoutEffect = () =>{

    useEffect(()=>{
        console.log('useEffect')
    },[])

    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
        console.log('hi')
    },[])
    
   
    return(
        <div></div>
    )
}

export default LayoutEffect;