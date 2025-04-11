import {useState, useEffect} from "react";
import axios from "axios";

const FetchAPI = (url) => {
    const[data, setData] = useState([]);

    useEffect(()=>{
        axios.get(url)
        .then(response => setData(response.data))
    },[url])

    return data;

}

export default FetchAPI;