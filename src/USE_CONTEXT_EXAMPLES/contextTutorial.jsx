import { useState, createContext } from "react";
import Login from './login'
import User from './username'

export const AppContext = createContext(null);

const ContextTutorial = () => {

    const [username, setUsername] = useState("");

    return(
        <div className="container">
            <div className="box">
            <AppContext.Provider value={{username, setUsername}}>
                <Login /> <User />
            </AppContext.Provider>
            </div>
        </div>
    )


}

export default ContextTutorial;