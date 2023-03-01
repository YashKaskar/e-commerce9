import React from 'react'
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core';

const CartItem = ({item}) => {
    const classes = useStyles();

    return (
      < Card className='cart-item'>
          <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
          <CardContent className={classes.cardContent}> 
              <Typography variant='h5'>{item.name}</Typography>
              <Typography variant='h6'>{ item.line_total.formatted_with_symbol}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}> 
              <div className={classes.buttons}>
                  <Button type='button' size='small'> - </Button>
                  <Typography>{ item.quantity}</Typography>
                  <Button type='button' size='small'> + </Button>
              </div> 
              <Button variant='contained' type='button' color='secondary'>Remove</Button>
          </CardActions>
      </Card>
  )
}

export default CartItem
