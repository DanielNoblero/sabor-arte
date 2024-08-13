import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    };

    const addItem = (productoToAdd) => {
        if (isInCart(productoToAdd.id)) {
            setCart(prevCart =>
                prevCart.map(prod =>
                    prod.id === productoToAdd.id
                        ? { ...prod, quantity: prod.quantity + productoToAdd.quantity }
                        : prod
                )
            );
        } else {
            setCart(prevCart => [...prevCart, { ...productoToAdd }]);
        }
    };

    const getTotalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    const emptyCart = () => {
        setCart([]);
    };

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalQuantity = getTotalQuantity();

    const contextValues = {
        cart,
        addItem,
        isInCart,
        getTotal,
        totalQuantity,
        emptyCart,
        clearCart
    };

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
};
