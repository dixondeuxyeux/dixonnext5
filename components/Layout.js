/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import Image from 'next/image'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
  Badge,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  InputBase,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CancelIcon from '@material-ui/icons/Cancel'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from '../utils/styles'
import { Store } from '../utils/Store'
import { getError } from '../utils/error'
import Cookies from 'js-cookie'

import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import axios from 'axios'

export default function Layout({ title, description, children }) {
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const { darkMode, cart, userInfo } = state
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h4: {
        fontSize: '1.8rem',
        fontWeight: 400,
        margin: '1rem 0',
      },

      a: {
        fontWeight: 400,
        margin: '1rem 0',
      },

      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#dfab51',
      },
      secondary: {
        light: '#ee4f10',
        main: '#ee1a0b',
      },
    },
  })
  const classes = useStyles()

  const [sidebarVisible, setSidebarVisible] = useState(false)
  const sidebarOpenHandler = () => {
    setSidebarVisible(true)
  }
  const sidebarCloseHandler = () => {
    setSidebarVisible(false)
  }

  const [categories, setCategories] = useState([])
  const { enqueueSnackbar } = useSnackbar()

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`)
      setCategories(data)
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' })
    }
  }

  const [query, setQuery] = useState('')
  const queryChangeHandler = (e) => {
    setQuery(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    router.push(`/search?query=${query}`)
  }
  useEffect(() => {
    fetchCategories()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' })
    const newDarkMode = !darkMode
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF')
  }
  const [anchorEl, setAnchorEl] = useState(null)
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null)
    if (redirect) {
      router.push(redirect)
    }
  }
  const logoutClickHandler = () => {
    setAnchorEl(null)
    dispatch({ type: 'USER_LOGOUT' })
    Cookies.remove('userInfo')
    Cookies.remove('cartItems')
    Cookies.remove('shippingAddress')
    Cookies.remove('paymentMethod')
    router.push('/')
  }

  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Dixon Print Shop` : 'Dixon Print Shop'}
        </title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='static' className={classes.navbar}>
          <Toolbar className={classes.toolbar}>
            <Box display='flex' alignItems='center'>
              <IconButton
                edge='start'
                aria-label='open drawer'
                onClick={sidebarOpenHandler}
                className={classes.menuButton}
              >
                <MenuIcon className={classes.navbarButton2} />
              </IconButton>
              <NextLink href='/' passHref>
                <Link className={classes.searchSection}>
                  {/* <Typography>Dixon Print Shop</Typography> */}
                  <Image
                    src={require('../public/images/dixonlogo4J.svg')}
                    width={100}
                    height={30}
                    alt='logo'
                  />
                </Link>
              </NextLink>
              <NextLink href='/about' passHref>
                <Link>
                  <Typography className={classes.h4}>About</Typography>
                </Link>
              </NextLink>
            </Box>
            <Drawer
              anchor='left'
              open={sidebarVisible}
              onClose={sidebarCloseHandler}
            >
              <List>
                <ListItem>
                  <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                  >
                    <Typography>Shop by Category</Typography>
                    <IconButton
                      aria-label='close'
                      onClick={sidebarCloseHandler}
                    >
                      <CancelIcon />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider light />
                {categories.map((category) => (
                  <NextLink
                    key={category}
                    href={`/search?category=${category}`}
                    passHref
                  >
                    <ListItem
                      button
                      component='a'
                      onClick={sidebarCloseHandler}
                    >
                      <ListItemText primary={category}> </ListItemText>
                    </ListItem>
                  </NextLink>
                ))}
              </List>
            </Drawer>

            <div className={classes.searchSection}>
              <form onSubmit={submitHandler} className={classes.searchForm}>
                <InputBase
                  name='query'
                  className={classes.searchInput}
                  placeholder='Search Photographs'
                  onChange={queryChangeHandler}
                />
                <IconButton
                  type='submit'
                  className={classes.iconButton}
                  aria-label='search'
                >
                  <SearchIcon />
                </IconButton>
              </form>
            </div>

            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>

              <NextLink href='/cart' passHref>
                <Link>
                  <Typography component='span'>
                    {cart.cartItems.length > 0 ? (
                      <Badge
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        // overlap='rectangle'
                        color='primary'
                        badgeContent={cart.cartItems.length}
                      >
                        <ShoppingCartIcon />
                      </Badge>
                    ) : (
                      <ShoppingCartIcon
                        color='primary'
                        className={classes.lower2}
                      />
                    )}
                  </Typography>
                </Link>
              </NextLink>
              {userInfo ? (
                <>
                  <Button
                    aria-controls='simple-menu'
                    aria-haspopup='true'
                    onClick={loginClickHandler}
                    className={classes.navbarButton}
                  >
                    {userInfo.name}
                  </Button>
                  <Menu
                    id='simple-menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                    <MenuItem
                      onClick={(e) => loginMenuCloseHandler(e, '/profile')}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={(e) =>
                        loginMenuCloseHandler(e, '/order-history')
                      }
                    >
                      Order History
                    </MenuItem>
                    {userInfo && userInfo.isAdmin && (
                      <MenuItem
                        onClick={(e) =>
                          loginMenuCloseHandler(e, '/admin/dashboard')
                        }
                      >
                        Admin Dashboard
                      </MenuItem>
                    )}
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href='/login' passHref>
                  <Link>
                    {' '}
                    <Typography component='span'> Login</Typography>
                  </Link>
                </NextLink>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography className={classes.lower2}>
            All rights reserved. © 2021 Dixon / Deux Yeux Photographie
            <br />
            The Dixon Print Shop offers exhibition quality digital prints for
            collectors and art lovers alike.
             {''} <br />
             Please feel free to email me with any questions or ideas at  <a href="mailto:www.dixondeuxyeux@gmail.com">dixondeuxyeux</a>  
             {''} <br />
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  )
}
