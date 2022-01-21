import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import Header from './components/Header'
import { CartContext } from './contexts/CartContext'

import { ThemeProvider, createTheme } from '@mui/material'
import { CssBaseline } from '@mui/material'

const theme = createTheme({
	palette: {
		primary: {
			main: '#009688',
			light: '#33ab9f',
			dark: '#00695f',
		},
		secondary: {
			main: '#ffc400',
			light: '#ffcf33',
			dark: '#b28900',
		},
		white: {
			main: '#fff',
		},
	},
})

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<CartContext>
				<BrowserRouter>
					<Header />
					<App />
				</BrowserRouter>
			</CartContext>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
