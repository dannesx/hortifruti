import { useContext } from 'react'
import { Storage } from './contexts/CartContext'

import { Routes, Route } from 'react-router-dom'
import Store from './pages/Store'
import Cart from './pages/Cart'
import Loading from './pages/Loading'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Grow from '@mui/material/Grow'

function App() {
	const { load } = useContext(Storage)
	const { success } = useContext(Storage)
	return (
		<>
			<Container
				maxWidth="lg"
				sx={{ display: 'flex', flexDirection: 'column' }}
			>
				{success && (
					<Grow in={success} timeout={200}>
						<Alert
							variant="filled"
							severity="success"
							sx={{ position: 'absolute', top: 75, alignSelf: 'center' }}
						>
							Sua compra foi realizada com sucesso!
						</Alert>
					</Grow>
				)}

				<Grid container spacing={2} marginY={10}>
					<Routes>
						<Route path="/" element={load ? <Store /> : <Loading />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</Grid>
			</Container>
		</>
	)
}

export default App
