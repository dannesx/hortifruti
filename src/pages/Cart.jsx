import { useContext } from 'react'
import { Storage } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

import CartList from '../components/CartList'
import BuyItens from '../components/BuyItens'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const Cart = () => {
	const { cart } = useContext(Storage)

	return (
		<>
			{cart.map(product => (
				<Grid item xs={12} sm={12} md={12} lg={12} key={product.id}>
					<CartList product={product} />
				</Grid>
			))}

			{cart.length ? (
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<BuyItens />
				</Grid>
			) : (
				<Typography variant="h6" color="initial">
					Seu carrinho está vazio! 😥 <Link to="/">Ir para loja</Link>
				</Typography>
			)}
		</>
	)
}

export default Cart
