import { useContext } from 'react'
import { CartContext } from '../components/Context/CartContex.jsx';
export const useCart = () => {
    return useContext(CartContext);
};