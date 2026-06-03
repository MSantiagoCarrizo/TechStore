import { createContext, useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((prod) => {
                    if (prod.id === item.id) {
                        return { ...prod, quantity: prod.quantity + qty }
                    } else {
                        return prod
                    }
                })
            )
        } else (
            setCart([...cart, { ...item, quantity: qty }])
        )
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }


    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const total = () => {
        return cart.reduce((acc, prod) => (acc += prod.quantity * prod.price), 0)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }
    
    const itemQty = (id) => {

        const itemInCart = cart.find((prod) => prod.id === id)

        if (itemInCart) {
            return itemInCart.quantity
        } else {
            return 0
        }

    }

    const value = useMemo(() => (
        { cart, addItem, clear, removeItem, total, cartQuantity, itemQty }
    ), [cart])

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}