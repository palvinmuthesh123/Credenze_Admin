import React from 'react';
import { Grid } from '@mui/material';
import Product from '../Product/product';

interface ProductListProps {
  products: {
    id: number;
    name: string;
    price: string;
    image: string;
  }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Product {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
