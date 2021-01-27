import React, { useState } from 'react';
import './CheckoutProduct.scss';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function CheckoutProduct({ id, title, price, image, rating }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  const getQuantity = (e) => {
    let selectedQuantity = e.target.value;
    setQuantity(selectedQuantity);
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
          <p className="checkoutProduct__title">{title}</p>
        </Link>
        <p>In stock</p>
        <div className="checkoutProduct__rating">
          {/* {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                ⭐️
              </span>
            ))} */}
        </div>
        <div className="checkoutProduct__options">
          <select
            onChange={getQuantity}
            className="checkoutProduct__quantity_select"
          >
            <option value="1">Qty: 1</option>
            <option value="2">Qty: 2</option>
            <option value="3">Qty: 3</option>
            <option value="4">Qty: 4</option>
            <option value="5">Qty: 5</option>
            <option value="6">Qty: 6</option>
            <option value="7">Qty: 7</option>
            <option value="8">Qty: 8</option>
          </select>
          <button
            onClick={removeItem}
            className="checkoutProduct__remove-button"
            key={id}
          >
            Remove from basket
          </button>
        </div>
      </div>
      <div className="checkoutProduct__price">
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>
            {quantity === 1 ? price : (price * quantity).toFixed(2)}
          </strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
