import React,{useState} from "react";

const StateTutorial = () => {

    const [counter,setCounter] = useState(0);
    const [name,setName] = useState("sumith");

    function increase (){
        setCounter(counter+1)
    }

    function decrease (){
        setCounter(counter-1)
    }

   let nameChange = (event) => {
    const newValue = event.target.value
        setName(newValue)
   }

    return(
        <div className="container">
  <div className="box">
    <button onClick={increase}>Increment</button>
    <p>{counter}</p>
    <button onClick={decrease}>Decrement</button>
    <br />
    <input type="text" onChange={nameChange} />
    <p>{name}</p>
  </div>
</div>

    )
}

export default StateTutorial;