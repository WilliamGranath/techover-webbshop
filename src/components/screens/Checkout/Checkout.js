import { Typography, Container, Grid, Divider, Button } from '@mui/material';
import useStyles from './styles';
import { connect } from 'react-redux';
import CartItem from '../../CartItem/CartItem';
import { resetCart } from '../../../reduxStore/actions/cartActions';
const Checkout = ({ cart, resetCart }) => {
	const classes = useStyles();

	const renderCartItems = () => {
		return cart.orders.map((item) => <CartItem {...item} />);
	};
	const cleanedCartItems = cart.orders.map((orderItem) => {
		return {
			id: orderItem.product.id,
			quantity: orderItem.quantity
		};
	});

	const stringifiedCartItems = JSON.stringify(cleanedCartItems);

	return (
		<div id="Checkout__screen" className={classes.screen}>
			<Container maxWidth="sm">
				<div className={classes.productHeader}>
					<Typography variant="h1" className={classes.productsTitle}>
						Checkout
					</Typography>
				</div>
				<div className={classes.checkout}>
					<Grid container spacing={2} justify="center">
						<Grid item xs={12}>
							{renderCartItems()}
						</Grid>
					</Grid>

					<Divider style={{ marginBottom: 20 }} />
					<Grid container spacing={2} justify="center">
						<Grid item xs={10}>
							Subtotal:
						</Grid>
						<Grid item xs={2} className={classes.subTotal}>
							{cart.productPrice.toFixed(2)} kr
						</Grid>
						<Grid item xs={10}>
							Shipping:
						</Grid>
						<Grid item xs={2} className={classes.subTotal}>
							{cart.deliveryFee} kr
						</Grid>
						<Grid item xs={10} className={classes.boldText}>
							Total:
						</Grid>
						<Grid item xs={2} className={classes.boldText}>
							{cart.totalPrice.toFixed(2)} kr
						</Grid>
					</Grid>
				</div>
				<Button onClick={() => resetCart()} variant="contained" className={classes.resetButton}>
					Reset cart
				</Button>
				<Grid item xs={6}>
					<iframe
						title="KlarnaAPI"
						src={'http://localhost:3001/checkout/BBB-123?cartItems=' + stringifiedCartItems}
						frameBorder={'none'}
						height="900px"
						width="100%"
					/>
				</Grid>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		resetCart: () => dispatch(resetCart())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
