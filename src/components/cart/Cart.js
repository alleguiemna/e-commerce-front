import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "react-feather";
import { addProduct, deleteProduct } from "../../redux/actions/Actions";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Cart = () => {
  const state = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addProduct(item));
  };
  const handleDelete = (item) => {
    dispatch(deleteProduct(item));
  };
  const cartItems = (product) => {
    return (
      <div>
        <div className="container m-4">
          <div className="row">
            <div className="col-md-6">
              <img src={product.image} alt="" height="200" width="200" />
            </div>
            <div className="col-md-6">
              <h3 className="text-uppercase text-black-50">{product.title}</h3>
              <h4 className="fw-bolder">
                {product.qty}*${product.price}=${product.qty * product.price}
              </h4>
              <button
                className="btn btn-outline-dark mr-2"
                onClick={() => handleDelete(product)}
              >
                <Minus />
              </button>
              <button
                className="btn btn-outline-dark mr-2"
                onClick={() => handleAdd(product)}
              >
                <Plus />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="container" style={{textAlign:"center",marginTop:"250px"}}>
        <div className="row d-flex justify-content-center" >
            <h1 className="text-uppercase fw-bolder text-dark-50  ">Your cart is empty</h1>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <Button variant="contained" style={{backgroundColor:"#EEEEEE",color:"black"}}>
            <h1 className="text-uppercase fw-bolder text-dark-50 center m-2">
              Proceed to checkout
            </h1>
          </Button>
        </Link>
      </div>
    );
  };
  return (
    <div>
      <div>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}
      </div>
    </div>
  );
};

export default Cart;
