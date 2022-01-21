import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'

const Loading = () => {
	return (
		<Grid
			item
			xs={12}
			sx={{ display: 'grid', minHeight: '70vh', placeItems: 'center' }}
		>
			<CircularProgress size={55}/>
		</Grid>
	)
}

export default Loading
