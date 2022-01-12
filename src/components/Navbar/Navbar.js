import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import StyledBadge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({ cartProducts }) => {
	const history = useHistory();

	const getNumberOfCartItems = () => {
		return cartProducts.reduce((p, c) => (p += c.quantity), 0);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" style={{ backgroundColor: '#1b1b1b' }}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: '#4e6f7d' }}>
						Techover
					</Typography>

					<IconButton aria-label="cart" onClick={() => history.push('/checkout')}>
						<StyledBadge badgeContent={getNumberOfCartItems()} color="primary">
							<ShoppingCartIcon style={{ color: '#4e6f7d' }} />
						</StyledBadge>
					</IconButton>
					<Button onClick={() => history.push('/')} color="inherit" style={{ color: '#4e6f7d' }}>
						Products
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

const mapState = (state) => {
	return {
		cartProducts: state.cart.orders
	};
};

export default connect(mapState)(Navbar);
