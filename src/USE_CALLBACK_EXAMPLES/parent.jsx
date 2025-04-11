import { useCallback, useState } from "react";
import Child from "./child";

const Parent = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() =>{
        console.log("button clicked");  
    },[])

    return(
        <div className="container">
            <div className="box">
                <Child onClick={handleClick}/>
                {count}
                <button onClick={()=>{setCount(count+1)}}>Increment</button>
            </div>
        </div>
    )

}

export default Parent;