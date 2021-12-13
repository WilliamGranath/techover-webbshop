import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		productsTitle: {
			fontFamily: 'roboto',
			marginTop: 20
		},
		screen: {
			paddingBottom: 50,
			height: '100vh',
			width: '100vw'
		},
		productHeader: {
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: 30,
			fontFamily: 'roboto'
		},
		boldText: {
			fontWeight: 700,
			fontSize: '1.2rem'
		},
		subTotal: {
			fontWeight: 700,
			fontSize: '0.8rem'
		},
		resetButton: {
			marginBottom: 10,
			marginTop: 10
		},
		klarnaIframe: {
			width: '100%',
			height: 900,
			border: 0,
			marginTop: 0,
			padding: '10px 20px',
			background: '#ffffff',
			borderRadius: '5px',
			marginBottom: '15px',
			overflowX: 0
		}
	})
);

export default useStyles;
