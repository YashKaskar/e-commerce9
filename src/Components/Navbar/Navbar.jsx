import React from 'react'
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core'
import logo from '../../Assets/e-commerce_logo.png'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './style'

const Navbar = () => {
    const classes = useStyles();
  return (
    <>
    < AppBar position='fixed' className='classes.appBar' color='inherit'>
       <Toolbar>
        {/* left side */}
         <Typography variant='h6' className= {classes.title} color= 'inherit'>   
            <img src= {logo} alt="Open" height='60px' className= {classes.image} />
             Open
         </Typography>
         <div className= {classes.grow} />
         {/* right side */}
         <div className={classes.button}>
            <IconButton aria-label='Show cart items' color='inherit'>
                <Badge badgeContent = {2} color= 'secondary'overlap="rectangular">
                    <ShoppingCart />
                </Badge>
            </IconButton>
         </div>
       </Toolbar> 
    </AppBar>    
    </>
  )
}

export default Navbar
