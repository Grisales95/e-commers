import { types } from "./types";

const storeReducer = (state = [], action) => {
  switch (action.type) {
    case types.add:
      const repeatProduct = state.find((item) => item.id === action.payload.id);
      if (repeatProduct) {
        return state.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.quantity * action.payload.price + item.price
              }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case types.delete:
      return state.filter((item) => item.id !== action.payload);
    case types.sum:
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              totalPrice: item.quantity * action.payload.price + item.price,
              quantity: item.quantity + 1
            }
          : item
      );

    case types.subtraction:
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: action.payload.quantity - 1,
              totalPrice: (item.quantity - 1) * action.payload.price
            }
          : item
      );
    case types.clear:
      return [];
    default:
      return state;
  }
};

export default storeReducer;
