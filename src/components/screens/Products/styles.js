import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		header: {
			backgroundColor: 'red',
			fontSize: '56px'
		},
		productScreen: {
			position: 'relative'
		},
		resetButton: {
			position: 'fixed',
			top: '15vh',
			right: '24vw'
		}
	})
);

export default useStyles;
