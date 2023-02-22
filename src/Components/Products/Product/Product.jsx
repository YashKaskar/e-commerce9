import React from 'react'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './style'

const Product = ({ product }) => {
    const classes = useStyles();
    
  return (
    <Card className={classes.root}>  
        <CardMedia className={classes.media} image=''  />
        <CardContent>
            <div className={classes.cardcontainer}>
                <Typography variant='h5' gutterBottom>
                      {product.name}
                </Typography>
                <Typography variant='h5'>
                      {product.price}
                </Typography>     
            </div>   
        <Typography variant='h2' color='text-Secondary'>
                      {product.description}
        </Typography>  
        </CardContent>  
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label='Add to Cart'>
                <AddShoppingCart />  
            </IconButton> 
        </CardActions >  
    </Card>
  )
}

export default Product
