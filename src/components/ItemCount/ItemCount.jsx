import { useState } from 'react'

function ItemCount({ initialValue = 1, stock, onAdd }) {
    const [count, setCount] = useState(initialValue);

    const decrement = () => {
        if (count > 1) {
            setCount(count => count - 1)
        }
    }
    const increment = () => {
        if (count < stock) {
            setCount((count) => count + 1);

        }
    };

    return (
        <div className='item-count'>
            <button className='button2' onClick={decrement}>-</button>
            <h1>{count}</h1>
            <button className='button2' onClick={increment}>+</button>
            <button className='button' onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount