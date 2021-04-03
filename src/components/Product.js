import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
    const getDate = (date) =>{
        const day = date.split("/");
        return `${day[2]}-${day[1]}-${day[0]}`;
    }

    const getPrice=(price)=>{
        const foreignprice= Number(price.substring(1, price.length));
        return `Rs.${(foreignprice*117.17).toFixed(2)}`
    }

    console.log(product)
  return (
    <div className="products_row">
      <img className="small" src={product.image} alt={product.name} />

        <h2>{product.name}</h2>
        <p>Price: {getPrice(product.price)}</p>
        <p>Stock: {product.stock}</p>
        <p>Published Date: {getDate(product.published_date)}</p>
        <p>Author: {product.author}</p>
        <p>Genre: {product.genre}</p>
      <div>
        <button onClick={() => onAdd(product)} disabled={product.stock===0?true:false} className="add-to-cart-btn">Add To Cart</button>
      </div>
    </div>
  );
}
