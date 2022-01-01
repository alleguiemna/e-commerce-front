import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";

// const initialState = {
//   cart: [],
// };

const cart=[]


const cartReducer = (state = cart, { type, payload }) => {
  switch (type) {
    //add product
    case ADD_PRODUCT:
      //check if the product exist
      const productExist= state.find(elt => elt.id === payload.id)
      //Increase the quantity
     if(productExist){
       return state.map(elt => elt.id === payload.id ? {...elt,qty:elt.qty+1} : elt)
     }
     else{
       return [...state,{...payload,qty:1}]
     }
     break;
     //delete product
    case DELETE_PRODUCT:
      //check if the product exist 
     const productExist1 = state.find(elt => elt.id === payload.id)

     if(productExist1.qty===1) {
       return state.filter(elt => elt.id !== payload.id )
     }
     else {
       return state.map(elt => elt.id === payload.id ? {...elt,qty:elt.qty-1} : elt)
     }
     break;
    default:
      return state;
      break;
  }
};

export default cartReducer

// const initialState={
//   cart:[]
// }

// const cartReducer =(state = initialState, {type,payload}) => {
//     // const product = action.payload;
//     switch (type) {
//         case ADD_PRODUCT:
//             // Check if Product is Already Exist
//             const exist = state.cart.find((x)=> x.id === payload.id);
//             if(exist){
//                 // Increase the Quantity
//                 return state.cart.map((x)=>
//                 x.id === payload.id ? {...x, qty: x.qty + 1} : x
//                 );
//             }else{
//                 // const product = action.payload;
//                 return[
//                     ...state.cart,
//                     {
//                         ...payload,
//                         qty: 1,
//                     }
//                 ]
//             }
//             break;

//             case DELETE_PRODUCT :
//                 const exist1 = state.cart.find((x)=> x.id === payload.id);
//                 if(exist1.qty === 1){
//                     return state.cart.filter((x)=> x.id !== exist1.id);
//                 }else{
//                     return state.cart.map((x)=>
//                         x.id === payload.id ? {...x, qty: x.qty-1} : x
//                     );
//                 }
//                 break;

//         default:
//             return state;
//             break;
//     }

// }

// export default cartReducer;
