import { createContext, useState } from "react";

export const CartContext = createContext([{}]);

const CartContextProvider = ({ children }) => {
	const [addToCart, setAddToCart] = useState([]);
	return (
		<CartContext.Provider value={{ setAddToCart, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
