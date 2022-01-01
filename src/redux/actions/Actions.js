import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";

//Add product to cart
export const addProduct = (product) => ({
          type: ADD_PRODUCT,
          payload:product
})
//Delete product from cart
export const deleteProduct = (product) => ({
          type: DELETE_PRODUCT,
          payload:product
})

