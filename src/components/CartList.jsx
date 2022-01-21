import { useState, useContext } from 'react'
import { Storage } from '../contexts/CartContext'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton'
import Delete from '@mui/icons-material/Delete'

const CartList = ({ product }) => {
	const { handleRemoveFromCart } = useContext(Storage)
	const { handleAddToTotalPrice } = useContext(Storage)
	const { handleRemoveFromTotalPrice } = useContext(Storage)
	const [count, setCount] = useState(1)
	const translatedName = require(`../data/${product.name}`).ptBR
	const price = require(`../data/${product.name}`).price

	const handleAddCount = price => {
		handleAddToTotalPrice(price)
		setCount(count + 1)
	}

	const handleSubtractCount = price => {
		handleRemoveFromTotalPrice(price)
		if (count <= 1) return handleRemoveFromCart(product.id, price)
		setCount(count - 1)
	}

	return (
		<>
			<Paper sx={{ padding: 2 }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<img
						src={require(`../assets/fruits/${product.id}.png`)}
						alt="Banana"
						className="fruit"
					/>
					<Box sx={{ marginLeft: 2, flexGrow: 1 }}>
						<Typography variant="h5" color="initial">
							{translatedName}
						</Typography>
						<Typography variant="subtitle2">
							R$ {price.toFixed(2).replace('.', ',')}
						</Typography>
						<Typography
							variant="overline"
							color="initial"
							sx={{
								display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
							}}
						>
							Carboidratos: {product.nutritions.carbohydrates}g / Proteína:{' '}
							{product.nutritions.protein}g / Gorduras: {product.nutritions.fat}
							g / Calorias: {product.nutritions.calories}g / Açúcares:{' '}
							{product.nutritions.sugar}g
						</Typography>
					</Box>
					<Typography variant="body1" color="initial" sx={{ flexGrow: 1 }}>
						QTD: {count}
					</Typography>
					<ButtonGroup disableElevation variant="contained">
						<Button onClick={() => handleSubtractCount(price)} color="error">
							-
						</Button>
						<Button onClick={() => handleAddCount(price)}>+</Button>
					</ButtonGroup>
					<Box ml={2}>
						<IconButton
							color="error"
							onClick={() => handleRemoveFromCart(product.id, count * price)}
						>
							<Delete />
						</IconButton>
					</Box>
				</Box>
			</Paper>
		</>
	)
}

export default CartList
