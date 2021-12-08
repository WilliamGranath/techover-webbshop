import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import useStyles from './styles';
import { connect } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import { incrementProduct, decrementProduct } from '../../../reduxStore/actions';

const Products = ({ products, loading, error, onDecrement, onIncrement }) => {
	const classes = useStyles();

	const renderProductCards = () => {
		if (loading) return [1, 2, 3, 4, 5].map((d) => <ProductCard loading={loading} key={d} />);

		const array = products.map((item, i) => {
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

		return array;
	};

	return (
		<div id="Product__screen">
			<Container maxWidth="md">
				<div className="Products__view">
					{/* Header */}
					<Typography variant="h1">Välj Varor</Typography>

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
		onDecrement: (data) => dispatch(decrementProduct(data))
	};
};

export default connect(mapState, mapDIspatchToProps)(Products);
