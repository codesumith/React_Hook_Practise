import FetchAPI from "../CUSTOM_HOOKS/fetchDataFromApi";

const Effect = () =>{
    const data = FetchAPI("https://fakestoreapi.com/products");
return(
    <div className="container">
        <div className="box">
            <ol>
                {
                     data.map((product, index) => (
                             <li key={index}>{product.title}</li>
                    ))
                    
                }
            </ol>
        </div>
       </div>
)

}

export default Effect;