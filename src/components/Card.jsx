import React, { useContext } from 'react'
import { Storage } from '../contexts/CartContext'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

const Card = ({ product, onCart }) => {
	const translatedName = require(`../data/${product.name}`).ptBR
	const price = require(`../data/${product.name}`).price
	const um = require(`../data/${product.name}`).um
	const { handleAddToCart } = useContext(Storage)

	return (
		<>
			<Paper sx={{ padding: 2 }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Box sx={{ flexGrow: 1 }}>
						<Typography variant="h5" color="initial">
							{translatedName}
						</Typography>
						<Typography variant="subtitle1" color="initial">
							R$ {price.toFixed(2).replace('.', ',')}{' '}
							<Typography variant="overline">/{um}</Typography>
						</Typography>
					</Box>

					<img
						src={require(`../assets/fruits/${product.id}.png`)}
						alt="Banana"
						className="fruit"
					/>
				</Box>
				<Divider sx={{ marginY: 2 }} />
				<Box sx={{ display: 'grid', placeItems: 'center' }}>
					<Button
						onClick={() => handleAddToCart(product, price)}
						variant="contained"
					>
						Adicionar ao carrinho
					</Button>
				</Box>
			</Paper>
		</>
	)
}

export default Card
