import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css'
import {Link} from 'react-router-dom'

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
  
    },
}));

const Navbar = () => {
    const options = ['Home','Categorias','Ofertas','Historial','Supermercado','Moda']
    
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" id='navbar'>
                    <Toolbar className='navbar__toolbar'>
                        <div className='navbar_logoinput'>
                            <img alt='logo' src='https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.0/mercadolibre/logo__large_plus.png'></img>
                            <div className='search'>
                                <StyledInputBase
                                    className='navbar__input'
                                    placeholder="Buscar productos, marcas y más..."
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                                <div className='search__icon'>
                                    <SearchIcon />
                                </div>
                            </div>
                        </div>
                        <div className='navbar__option'>
                            {options.map((option)=>(
                                <Link to='' className='nav__link'>{option}</Link>
                            ))}
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar;