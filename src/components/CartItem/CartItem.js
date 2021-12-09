import useStyles from './styles';
import { Typography, Grid } from '@mui/material';

const CartItem = ({ product, quantity }) => {
	console.log({ product, quantity });
	const classes = useStyles();
	return (
		<div className={classes.cartItem}>
			<Grid container spacing={2}>
				<Grid item xs={10}>
					<Typography variant="h3" className={classes.prodName}>
						{product.title}
					</Typography>
					<img className={classes.img} src={product.image} alt={product.title}></img>
					<div className={classes.priceOfProds}>{parseInt(product.price) * quantity} kr</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default CartItem;
