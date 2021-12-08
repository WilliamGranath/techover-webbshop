import * as actionTypes from '../actions/actionTypes';

const initialState = {
	totalPrice: 0,
	deliveryFee: 0,
	productPrice: 0,
	orders: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.RESET_CART:
			return {
				totalPrice: 0,
				deliveryFee: 0,
				productPrice: 0,
				orders: []
			};

		case actionTypes.INCREMENT_PRODUCT:
			const prodArray = incrementProducts(state.orders, action);

			return {
				...state,
				orders: prodArray
			};

		 case actionTypes.DECREMENT_PRODUCT:
			const decArray = decrementProducts(state.orders, action.payload.id);

			return {
				...state,
				orders: decArray
			};
		case actionTypes.CALCULATE_TOTAL_CART_AMOUNT:
			return {
				...state,
				totalPrice: action.totalPrice,
				deliveryFee: action.deliveryFee,
				productPrice: action.productPrice
			};
		default:
			return state;
	}
};

const findProductIndex = (array, id) => {
	if (array.length === 0) {
		return -1;
	} else {
		const index = array.findIndex((item) => item.product.id === id);
		return index;
	}
};

const incrementProducts = (orders, action) => {
	const prodArray = orders.slice();
	const productIndex = findProductIndex(prodArray, action.payload.id);

	if (productIndex !== -1) {
		prodArray[productIndex] = {
			product: prodArray[productIndex].product,
			quantity: prodArray[productIndex].quantity + 1
		};
	} else {
		const product = { product: action.payload, quantity: 1 };
		prodArray.push(product);
	}

	return prodArray;
};

const decrementProducts = (orders, id) => {
	const decArray = orders.slice();
	const decProdIndex = findProductIndex(decArray, id);

	if (decProdIndex !== -1 && orders[decProdIndex].quantity > 1) {
		decArray[decProdIndex] = {
			product: decArray[decProdIndex].product,
			quantity: decArray[decProdIndex].quantity -1
		}
	} else if (decProdIndex !== -1) {
		decArray.splice(decProdIndex, 1);
	}
	return decArray;
};

export default reducer;
