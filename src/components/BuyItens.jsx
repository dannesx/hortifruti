import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import React, { useContext } from 'react'
import { Storage } from '../contexts/CartContext'

const BuyItens = () => {
	const { handleClearCart } = useContext(Storage)
	const { totalPrice } = useContext(Storage)
	const { handleSuccess } = useContext(Storage)

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row' },
					alignItems: 'center',
				}}
				mt={2}
			>
				<Typography
					variant="h6"
					sx={{ flexGrow: 1, marginBottom: { xs: 2, sm: 0 } }}
				>
					Total: R${totalPrice.toFixed(2).replace('.', ',')}
				</Typography>
				<Box sx={{ display: 'flex', gap: 2 }}>
					<Button
						variant="outlined"
						sx={{ display: { xs: 'none', sm: 'block' } }}
						onClick={handleClearCart}
					>
						Limpar Carrinho
					</Button>
					<Button variant="contained" onClick={handleSuccess}>Comprar</Button>
				</Box>
			</Box>
		</>
	)
}

export default BuyItens
