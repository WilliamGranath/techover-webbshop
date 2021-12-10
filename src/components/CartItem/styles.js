import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		cartItem: {
			marginBottom: 15,
			background: '#ffffff',
			borderRadius: 5,
			padding: '10px 20px'
		},
		prodName: {
			color: '#4e6f7d',
			fontWeight: 500,
			height: 40,
			fontSize: '18px'
		},
		priceOfProds: {
			display: 'flex',
			padding: '2px 10px',
			background: 'black',
			width: 'fit-content',
			fontWeight: 300,
			color: 'white',
			borderRadius: 40
		},
		img: {
			width: 30,
			marginBottom: 10,
			objectFit: 'contain'
		}
	})
);

export default useStyles;
