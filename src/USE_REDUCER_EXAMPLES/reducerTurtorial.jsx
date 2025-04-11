import React,{useReducer} from "react";

const reducer = (state, action) =>{
    switch(action.type){
        case "Increment":
            return {count:state.count +1, isShow:state.isShow}
        case "Change":
            return {count:state.count, isShow:!state.isShow}
        default:
            return state
    }
}

const Reducer = () => {

const [state, dispatch] = useReducer(reducer, {count:0, isShow:true})

return(
    <div className="container">
            <div className="box">
                <h1>{state.count}</h1>
                <button onClick={()=>{
                    dispatch({type:"Increment"})
                    dispatch({type:"Change"})
                }}>Click Here</button>
                {state.isShow && "Click to increase number"}
            </div>
    </div>
)

}

export default Reducer;