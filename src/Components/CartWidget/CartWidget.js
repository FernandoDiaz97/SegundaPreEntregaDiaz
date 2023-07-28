import { Link } from "react-router-dom";
import cart from "./assets/cart.svg";
import "./CartWidget.css";
import { useContext } from "react";
import { Cartcontext } from "../../Context/CartContext";


const CartWidget = () => {

    const {totalQuantity} = useContext(Cartcontext)
    return(

            <Link to ='/cart' className="CartWidget" style={{display: totalQuantity > 0 ? 'block' : 'none'}}>

            
                <img className="carrito" src={cart} alt ="carrito " ></img>
                { totalQuantity }

            </Link>

            

        
        

    )
}

export default CartWidget;