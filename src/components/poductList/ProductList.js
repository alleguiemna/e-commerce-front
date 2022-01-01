import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import ProductCard from "../productCard/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  // console.log(products)
  
  //fetching all products from API
  useEffect(() => {
     axios
     .get("https://fakestoreapi.com/products")
     .then((res) => {
       setProducts(res.data)
       setFilter(res.data);
       setLoading(false);
     })
     .catch((error) => setError(error.response.data));
  
  }, []);
  // console.log(products)
  //function to filter products
  const filterProduct = (cat) => {
    const updatedList = products.filter((elt) => elt.category === cat);
    setFilter(updatedList);
    console.log(updatedList);
  };
//Loading component
  const Loading = () => {
    return (
      < >
       <div className="container">
         <div className="row">
         <div className="col-md-3">
          <Skeleton height={450} />
        </div>
        <div className="col-md-3">
          <Skeleton height={450}  />
        </div>
        <div className="col-md-3">
          <Skeleton height={450} />
        </div>
        <div className="col-md-3">
          <Skeleton height={450}  />
        </div>
         </div>
       </div>
      </>
    );
  };
  //component ShowProduct 
  const ShowProducts = () => {
    return (
      <>
        <div className="d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark m-2"
            onClick={() => setFilter(products)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark m-2"
            onClick={() => filterProduct("jewelery")}
          >
            jewelery
          </button>
          <button
            className="btn btn-outline-dark m-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        <div className="d-flex justify-content-around flex-wrap">
          {filter.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  };
  return (  
    <div className="container">
      <div>
        <h1 className="display-6 fw-bolder text-center">The Latest Products</h1>
        <hr />
      </div>
      <div>{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default ProductList;
