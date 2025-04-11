import React from "react";

const Child = ({onClick}) =>{
console.log("child rendered")

    return(
        <div>
            <button onClick={onClick}>Child Button</button>
        </div>  
    )
}

export default React.memo(Child);