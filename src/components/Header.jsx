import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { ShoppingCart } from '@mui/icons-material'
import { Storage } from '../contexts/CartContext'

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('xs')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}))

export default function Header() {
	const { cart } = useContext(Storage)

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar>
				<Toolbar>
					<Box sx={{ flexGrow: 1 }}>
						<Link to="/" className="logo">
							<Typography variant="h6" component="h1">
								HortiFruit ✨
							</Typography>
						</Link>
					</Box>

					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Buscar"
								inputProps={{ 'aria-label': 'search' }}
							/>
						</Search>
					</Box>

					<Link to="/cart">
						<IconButton
							aria-label="Carrinho"
							color="white"
							sx={{ marginLeft: 2 }}
						>
							<Badge badgeContent={cart.length} color="error">
								<ShoppingCart color="white" />
							</Badge>
						</IconButton>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
