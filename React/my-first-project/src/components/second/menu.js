import { Link } from "react-router-dom";
const Menu = () => {
    return(
        <div>
            Welcome to Menu Page <br/> 
            <br/> 
            <Link to="/first">First</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br/> 
            <Link to="/second">Second</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br/> 
            <Link to="/third">Third</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br/> 
            <Link to="/four">Fourth</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}
export default Menu;
