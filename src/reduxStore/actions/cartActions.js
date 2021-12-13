import * as actionTypes from './actionTypes';

export const resetCart = (payload) => {
	return { type: actionTypes.RESET_CART };
};

export const calculateTotalCartAmount = () => {
	return (dispatch, getState) => {
		const state = getState();
		const { orders } = state.cart;
		const totalPrice = orders.reduce((previousValue, currentValue) => {
			const { product, quantity } = currentValue;
			const price = parseFloat(product.price).toFixed(2);
			const sum = (previousValue += price * quantity);
			return sum;
		}, 0);
		const DELIVERY_COST = 39;
		const deliveryFee = totalPrice > 500 ? 0 : DELIVERY_COST;

		dispatch({
			type: actionTypes.CALCULATE_TOTAL_CART_AMOUNT,
			productPrice: totalPrice,
			deliveryFee: deliveryFee,
			totalPrice: totalPrice + deliveryFee
		});
	};
};

export const incrementProduct = (payload) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.INCREMENT_PRODUCT, payload: payload });
		dispatch(calculateTotalCartAmount());
	};
};

export const decrementProduct = (payload) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.DECREMENT_PRODUCT, payload: payload });
		dispatch(calculateTotalCartAmount());
	};
};
