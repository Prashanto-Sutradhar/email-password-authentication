import {Outlet} from "react-router-dom"
import Home from "../../home/Home";
import Nav from "../../navigation/Nav";

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        
        </div>
    );
};

export default Root;