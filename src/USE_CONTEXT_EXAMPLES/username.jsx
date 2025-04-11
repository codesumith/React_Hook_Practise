import { useContext } from "react";
import { AppContext } from "./contextTutorial"

const User = () => {
    const {username} = useContext(AppContext);
    return(
        <div>
            UserName : {username}
        </div>
    )
}

export default User;