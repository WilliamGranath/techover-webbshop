import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		screen: {
			marginTop: 10,
			paddingBottom: 50,
			float: 'left'
		},
		productHeader: {
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: 30
		},
		boldText: {
			fontWeight: 700,
			fontSize: '1.2rem'
		},
		subTotal: {
			fontWeight: 700,
			fontSize: '0.8rem'
		}
	})
);

export default useStyles;
