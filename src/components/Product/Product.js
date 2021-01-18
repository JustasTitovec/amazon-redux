import React from 'react';
import './Product.css';
import { useDispatch } from 'react-redux';

function Product({ id, title, image, price, rating, quantity }) {
  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: quantity,
      },
    });
  };

  return (
    <div className="product">
      <div style={{ textDecoration: 'none' }}>
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating" key={rating}>
            {Array(rating)
              .fill()
              .map((index, i) => (
                <span role="img" aria-label="star" key={i}>
                  ⭐️
                </span>
              ))}
          </div>
        </div>
      </div>
      <img className="product__image" src={image} alt="watch" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
