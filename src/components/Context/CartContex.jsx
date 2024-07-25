import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    };

    const addItem = (productoToAdd) => {
        if (!isInCart(productoToAdd.id)) {
            setCart(prev => [...prev, productoToAdd])
        } else {
            console.error("El producto ya esta en el carrito")
        }
    }

    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu;
    }

    const emptyCart = () => {
        setCart([]);
    }

    const totalQuantity = getTotalQuantity()

    const obj = { cart, isInCart, addItem, totalQuantity, emptyCart };
    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}
