import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify'; // Importar Toastify
import 'react-toastify/dist/ReactToastify.css'; // Importar estilos de Toastify

function ItemCount({ initialValue = 1, stock, onAdd }) {
    const { t } = useTranslation(); // Hook para traducción
    const [count, setCount] = useState(initialValue);

    const decrement = () => {
        if (count > 1) {
            setCount(count => count - 1);
        }
    };

    const increment = () => {
        if (count < stock) {
            setCount((count) => count + 1);
        }
    };

    const handleAdd = () => {
        onAdd(count); // Llama a la función `onAdd` pasada por props
        toast.success(t('itemCount.toastAdded', { count })); // Notificación de éxito
    };

    return (
        <div className="item-count">
            <button className="button2" onClick={decrement}>-</button>
            <h1>{count}</h1>
            <button className="button2" onClick={increment}>+</button>
            <button className="button" onClick={handleAdd}>
                {t('itemCount.addToCartButton')}
            </button>
        </div>
    );
}

export default ItemCount;
