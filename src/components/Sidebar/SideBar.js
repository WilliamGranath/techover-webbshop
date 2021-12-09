import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const SideBar = (props) => {
	const history = useHistory();
	const classes = useStyles();
	return (
		<Box className={classes.catButtonbox}>
			<Button className={classes.catButton} onClick={() => history.push('/products/jewelery')} color="inherit">
				Jewelery
			</Button>
			<Button className={classes.catButton} onClick={() => history.push('/products/electronics')} color="inherit">
				Electronics
			</Button>
			<Button
				className={classes.catButton}
				onClick={() => history.push('/products/mensclothing')}
				color="inherit"
			>
				Men's clothing
			</Button>
			<Button
				className={classes.catButton}
				onClick={() => history.push('/products/womensclothing')}
				color="inherit"
			>
				Women's clothing
			</Button>
		</Box>
	);
};

export default SideBar;
