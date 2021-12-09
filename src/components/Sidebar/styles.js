import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		catButtonbox: {
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			marginBottom: 10
		},
		catButton: {
			height: '100%',
			width: '10vw',
			backgroundColor: '#1b1b1b',
			borderRadius: '20px',
			marginBottom: 10
		}
	})
);

export default useStyles;
