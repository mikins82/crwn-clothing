import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN // payload is optional and we dont use it in reducer
});