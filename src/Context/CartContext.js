import {createContext, useState} from "react";

export const Cartcontext = createContext ({
    cart: []
})

export const CartProvider = ({ children}) => {
    const [cart, setCart] = useState ([])
    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        } else{
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    };

    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Cartcontext.Provider value={{cart, total, totalQuantity, addItem, removeItem, clearCart}}>
             {children}
        </Cartcontext.Provider>
       
    )
}

export default Cartcontext;