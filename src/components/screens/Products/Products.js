import React from 'react';
import { Typography, Container, Grid, IconButton } from '@mui/material';
import useStyles from './styles';
import { connect } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import { incrementProduct, decrementProduct, resetCart } from '../../../reduxStore/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';
import SideBar from '../../Sidebar/SideBar';

const Products = ({ products, loading, error, onDecrement, onIncrement, resetCart }) => {
	const classes = useStyles();
	console.log(products);
	const { category } = useParams();

	console.log(category);
	const renderProductCards = () => {
		if (loading) return [1, 2, 3, 4, 5].map((d) => <ProductCard loading={loading} key={d} />);

		let array = products.map((item, i) => {
			return (
				<ProductCard
					{...item}
					loading={loading}
					key={i}
					onIncrement={() => onIncrement(item)}
					onDecrement={() => onDecrement(item)}
					isLast={i === products.length - 1}
				/>
			);
		});

		if (category) {
			array = array.filter((item) => {
				console.log(item.props.category);
				const s = item.props.category.replace(/[^A-Z0-9]/gi, '');

				return s === category;
			});
		}

		return array;
	};

	return (
		<div id="Product__screen" className="productScreen">
			<IconButton
				positions="right"
				className={classes.resetButton}
				onClick={() => resetCart()}
				aria-label="delete"
				size="large"
			>
				<DeleteIcon fontSize="inherit" />
			</IconButton>
			<SideBar />
			<Container className={classes.productsInView}maxWidth="md">
				<div className="Products__view">
					{/* Header */}
					<Typography variant="h1">Shop Items</Typography>

					{/* Items */}
					<Grid container spacing={2}>
						<Grid item xs={12}>
							{renderProductCards()}
						</Grid>
					</Grid>
					{/* END Items */}
					{/* <div className={classes.buttonContainer}>
						<Button variant="contained">Köp</Button>
					</div> */}
				</div>
			</Container>
		</div>
	);
};

const mapState = (state) => {
	const { items, loading, error } = state.products;
	return { products: items, loading, error };
};

const mapDIspatchToProps = (dispatch) => {
	return {
		onIncrement: (data) => dispatch(incrementProduct(data)),
		onDecrement: (data) => dispatch(decrementProduct(data)),
		resetCart: (data) => dispatch(resetCart(data))
	};
};

export default connect(mapState, mapDIspatchToProps)(Products);
