import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'

const Loading = () => {
	return (
		<Grid
			item
			xs={12}
			sx={{ display: 'grid', minHeight: '70vh', placeItems: 'center' }}
		>
			<div style={{ display: 'grid', placeItems: 'center' }}>
				<CircularProgress size={55} />
				<p style={{ textAlign: 'center' }}>
					Se o site não carregar, tente instalar esta{' '}
					<a
						href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
						target="_blank"
						rel="noreferrer"
					>
						extensão do Chrome
					</a>
				</p>
			</div>
		</Grid>
	)
}

export default Loading
