import React from 'react'
import { Grid }  from '@material-ui/core'

import Product from './Product/Product'

import useStyles from './style'

const products = [
    { id: 1, name:'Puma', price: '$2', image : 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', description: 'Sneakers' },
    { id: 2, name:'B-twin', price: '$20', image : 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80', description: 'Cycle'}
]

const Products = () => {
  const classes = useStyles()
  return (
    <main className={classes.content}>  
      <div className={ classes.toolbar} />
    <Grid container justifyContent='center' spacing={4}>
        {products.map((product) => (    
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product= {product} />
            </Grid>
        ))}      
    </Grid>    
    </main>
  )
}

export default Products
