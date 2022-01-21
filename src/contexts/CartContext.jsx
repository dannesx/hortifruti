import { createContext, useState, useEffect } from 'react'

export const Storage = createContext()

export const CartContext = ({ children }) => {
	const [cart, setCart] = useState([])
	const [products, setProducts] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)
	const [load, setLoad] = useState(false)
	const [success, setSuccess] = useState(false)

	const API = 'https://www.fruityvice.com/api/fruit/all'

	useEffect(() => {
		async function fetchAPI() {
			const response = await fetch(API)
			const data = await response.json()
			setProducts(data)
			setLoad(true)
		}
		fetchAPI()
	}, [])

	const handleAddToCart = (product, price) => {
		if (cart.includes(product)) {
			return
		}
		handleAddToTotalPrice(price)
		setCart([...cart, product])
	}

	const handleRemoveFromCart = (id, price) => {
		handleRemoveFromTotalPrice(price)
		setCart(cart.filter(product => product.id !== id))
	}

	const handleClearCart = () => {
		setCart([])
		setTotalPrice(0)
	}

	const handleAddToTotalPrice = price => setTotalPrice(totalPrice + price)

	const handleRemoveFromTotalPrice = price =>
		totalPrice - price < 0
			? setTotalPrice(0)
			: setTotalPrice(totalPrice - price)

	const handleUpdateTotalPrice = price => setTotalPrice(price)

	const handleSuccess = () => {
		handleClearCart()
		setSuccess(true)
		setTimeout(() => setSuccess(false), 3000)
	}

	return (
		<Storage.Provider
			value={{
				products,
				cart,
				load,
				totalPrice,
				success,
				handleAddToCart,
				handleRemoveFromCart,
				handleClearCart,
				handleAddToTotalPrice,
				handleRemoveFromTotalPrice,
				handleUpdateTotalPrice,
				handleSuccess,
			}}
		>
			{children}
		</Storage.Provider>
	)
}
