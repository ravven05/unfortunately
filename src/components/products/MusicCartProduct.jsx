import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';


const ProductCard = ({ item }) => {
    const navigate = useNavigate();
  return (
    <div>
        {item.name} {item.price}
        <button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
        <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
        {/* <button onClick={() => deleteProduct(item.id)}>Delete</button> */}
        {/* <button onClick={() => addProductToCart(item)}>Add To Cart</button> */}
        {/* <IconButton size="small" onClick={() => addProductToCart(item)}> */}
        {/* </IconButton> */}
    </div>
  )
}

export default ProductCard