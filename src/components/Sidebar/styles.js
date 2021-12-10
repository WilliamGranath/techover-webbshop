import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		catButtonbox: {
			display: 'flex',
			flexDirection: 'column',
			position: 'fixed',
			height: '10vh',
			marginBottom: 10,
			marginTop: 10
		},
		catButton: {
			height: '100%',
			width: '10vw',
			backgroundColor: '#1b1b1b',
			borderRadius: '20px',
			marginBottom: 5,
			marginLeft: 10
		}
	})
);

export default useStyles;
