import { useMemo, useState } from "react";
import FetchAPI from "../CUSTOM_HOOKS/fetchDataFromApi";

const MemoTutorial = () => {

    const data  = FetchAPI("https://fakestoreapi.com/products");
    const [show, setShow] = useState(false);




const largestName = useMemo(()=>{
    if(!data) return "Loading...";
    

    let largest = "";


    for (let i = 0; i < data.length; i++) {
        if (data[i].title.length > largest.length) {
          largest = data[i].title;
        }
      }

    console.log("Function Excecuted")

    return largest
},[data])

return(
    <div className="container">
            <div className="box">
                 <p>{largestName}</p>
                 <button onClick={() => {
                    setShow(!show)
                 }}>Toggle</button>
                 {show && "Toggle"}
            </div>
    </div>
)
}

export default MemoTutorial;
