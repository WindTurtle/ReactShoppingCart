import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
//rootReducer là store tổng của ứng dụng

export const rootReducer = combineReducers({
  //Nơi sẽ chứa các reducer khác
  CartReducer: CartReducer,
});
