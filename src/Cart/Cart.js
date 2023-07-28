import { useContext } from "react"
import { Cartcontext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../Components/CartItem/CartItem"



const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(Cartcontext)

    if(totalQuantity ===0) {
        return (
            <div>
                <hi>No hay items agregados al carrito</hi>
                <Link to='/' className="Option"></Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p=><CartItem key={p.id}{...p}></CartItem>)}
            <button onClick={()=> clearCart()} className="Option">Limpia tu Carrito</button>
            <Link to='/checkout' className="Option">checkout</Link>
        </div>
    )
}

export default Cart;