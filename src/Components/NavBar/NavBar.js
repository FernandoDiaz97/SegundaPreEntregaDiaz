import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar (){
    return (
        <nav className="menu"> 
            <Link to= '/'>
                <h3 className="Title">StyleGaming</h3>
            </Link>
            <div className="Categorias">
                <NavLink to={`/category/gaming`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>gaming</NavLink>
                
                
                <NavLink to={`/category/oficina`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>oficina</NavLink>
                <NavLink to={`/category/accesorio`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>accesorio</NavLink>
                <CartWidget></CartWidget>

            </div>

            

            
        </nav>
    )
}

export default NavBar;