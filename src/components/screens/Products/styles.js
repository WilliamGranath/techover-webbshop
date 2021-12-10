import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		productsInView: {
			marginTop: 70
		},
		productScreen: {
			position: 'relative'
		},
		resetButton: {
			position: 'fixed',
			top: '94vh',
			right: '16vw',
			backgroundColor: '#1b1b1b',
			'&:hover': {
				backgroundColor: 'transparent'
			},
			color: '#4e6f7d',
			padding: 5
		}
	})
);

export default useStyles;
