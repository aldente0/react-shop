export function reducer(state, { type, payload }) {
	switch (type) {
		case 'CLOSE_ALERT':
			return {
				...state,
				alertName: '',
			};
		case 'REMOVE_FROM_ORDER':
			return {
				...state,
				order: state.order.filter((el) => el.id !== payload.id),
			};
		case 'HANDLE_BASKET_SHOW':
			return {
				...state,
				isBasketShow: !state.isBasketShow,
			};
		case 'INCREMENT_ITEM':
			return {
				...state,
				order: state.order.map((el) => {
					if (el.id === payload.id) {
						const newEl = {
							...el,
							quantity: el.quantity + 1,
						};
						return newEl;
					} else {
						return el;
					}
				}),
			};
		case 'DECREMENT_ITEM':
			return {
				...state,
				order: state.order.map((el) => {
					if (el.id === payload.id) {
						const newQuantity = el.quantity - 1;

						const newEl = {
							...el,
							quantity: newQuantity > 0 ? newQuantity : 0,
						};

						return newEl;
					} else {
						return el;
					}
				}),
			};
		case 'SET_GOODS':
			return {
				...state,
				goods: payload || [],
				loading: false,
			};
		case 'ADD_TO_ORDER': {
			const itemIndex = state.order.findIndex(
				(el) => el.id === payload.id
			);

			let newOrder = null;
			if (itemIndex < 0) {
				const newItem = {
					...payload,
					quantity: 1,
				};

				newOrder = [...state.order, newItem];
			} else {
				newOrder = state.order.map((orderItem, index) => {
					if (index === itemIndex) {
						return {
							...orderItem,
							quantity: orderItem.quantity + 1,
						};
					} else {
						return orderItem;
					}
				});
			}

			return {
				...state,
				order: newOrder,
				alertName: payload.name,
			};
		}
		default:
			return state;
	}
}
