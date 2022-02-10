import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
	goods: [],
	loading: true,
	order: [],
	isBasketShow: false,
	alertName: '',
};

export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState);

	value.removeFromOrder = (itemId) => {
		dispatch({
			type: 'REMOVE_FROM_ORDER',
			payload: { id: itemId },
		});
	};

	value.handleBasketShow = () => {
		dispatch({ type: 'HANDLE_BASKET_SHOW' });
	};

	value.incrementItem = (itemId) => {
		dispatch({
			type: 'INCREMENT_ITEM',
			payload: { id: itemId },
		});
	};

	value.decrementItem = (itemId) => {
		dispatch({
			type: 'DECREMENT_ITEM',
			payload: { id: itemId },
		});
	};

	value.addToOrder = (item) => {
		dispatch({
			type: 'ADD_TO_ORDER',
			payload: item,
		});
	};

	value.closeAlert = () => {
		dispatch({ type: 'CLOSE_ALERT' });
	};

	value.setGoods = (data) => {
		dispatch({ type: 'SET_GOODS', payload: data });
	};

	return (
		<ShopContext.Provider value={value}>{children}</ShopContext.Provider>
	);
};
