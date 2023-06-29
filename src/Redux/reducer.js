import { ADDITEM, DELETEITEM, LOGIN } from "./action";

const initialState = {
  Cart: [],
  login : false
};

export const reducer = (state = initialState, { type, payload }) => {
  if (type === ADDITEM) {
    const existingItem = state.Cart.find((item) => item.id === payload.id);
    if (existingItem) {
      return {
        ...state,
        Cart: state.Cart.map((item) =>
          item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    } else {
      return {
        ...state,
        Cart: [...state.Cart, { ...payload, qty: 1 }],
      };
    }
  } else if (type === DELETEITEM) {
    const existingItem1 =state.Cart.find((item) => item.id === payload.id);
    if(existingItem1.qty ===1){
        return {
            ...state,
            Cart: state.Cart.filter((item) => item.id !== payload.id),
          };
    }

    else{
        return  {
            ...state,
            Cart: state.Cart.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty - 1 } : item
            ),
          };
    }
    
  }

  else if( type === LOGIN){
    return {...state,login:true}
  }
  
  else {
    return state;
  }
};
