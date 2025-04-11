import { useRef } from "react";

const Reference = () => {

    const inputRef = useRef(null);

    const onChange = () => {
        inputRef.current.value = "";
    }
return(
    <div className="container">
        <div className="box">
                    <h1>Sumith</h1>
                    <input type="text" placeholder="Ex.." ref={inputRef}/>
                    <button onClick={onChange}>ChangeName</button>
        </div>
    </div>
)
}

export default Reference;