export const addToBasket = (state = { basket: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return { ...state, basket: [...state.basket, action.payload] };
    default:
      return state;
  }
};

export const getBasketTotal = (basket) => {
  return basket.reduce((amount, item) => item.price + amount, 0);
};
