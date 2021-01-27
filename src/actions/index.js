export const addToBasket = () => {
  return {
    type: 'ADD_TO_BASKET',
  };
};

export const removeItem = () => {
  return {
    type: 'REMOVE_FROM_BASKET',
  };
};

export const updateQty = () => {
  return {
    type: 'UPDATE_QTY',
  };
};
