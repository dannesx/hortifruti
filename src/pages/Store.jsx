import { useContext } from 'react'
import { Storage } from '../contexts/CartContext'

import Card from '../components/Card'
import Grid from '@mui/material/Grid'

const Store = () => {
	const { products } = useContext(Storage)
	return (
		<>
			{products.map(product => (
				<Grid item xs={12} sm={6} md={6} lg={4} key={product.id}>
					<Card product={product} onCart={false}/>
				</Grid>
			))}
		</>
	)
}

export default Store
