import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Star} from "react-feather"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import { addProduct } from "../../redux/actions/Actions";
import Skeleton from "react-loading-skeleton"

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  // console.log(useParams())
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  // console.log(product)

//   console.log(product.rating)
  //fetching one product by id from API
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error) => setError(error.response.data));
  }, [id]);
  //Loading component
  const Loading = () => {
    return <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <Skeleton height={400} width={400}/>
        </div>
        <div className="col-md-6">
        <Skeleton height={48} width={330} />
        <Skeleton height={28} width={330}/>
        <Skeleton height={30} width={330}/>
        <Skeleton height={34} width={330}/>
        <Skeleton height={192} width={330}/>
        <Skeleton height={48} width={330}/>
        </div>
      </div>
    </div>
    </>;
  };
  //Show product component
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} alt="" height="400" width="400"/>
        </div>
        <div className="col-md-6">
          <h1 className="text-uppercase text-black-50">{product.category}</h1>
          <h4 className="display-5 mt-2">{product.title}</h4>
          <h4 ><span className="display-5 fw-bolder lead ">Rating:</span>{product.rating && product.rating.rate}<Star style={{marginBottom:"5px"}} /></h4>
          <h3 >${product.price}</h3>
          <p>{product.description}</p>
          <button className="btn btn-outline-dark mr-2" onClick={() => dispatch(addProduct(product))}>Add to cart</button>
          <Link to="/cart"><button className="btn btn-outline-dark">Go to Cart</button></Link>
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <div className="row mt-2">
      {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
};

export default ProductDetail;
