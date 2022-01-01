import React from "react";
import { Card } from "react-bootstrap";
import ProductList from "../poductList/ProductList";

const Home = () => {
  return (
    <div>
      <Card className="bg-dark text-black border-0 mb-5" >
        <Card.Img
          src="/images/R.jpg"
          alt="Card image"
          height="550px"
          
        />
          <Card.ImgOverlay className="d-flex flex-column" >
          <div className="container">
            <Card.Title className="display-3 fw-bolder mb-0 text-secondary ">NEW SEASON ARRIVALS</Card.Title>
            <Card.Text className="lead fs-2 text-secondary">
              CHECK OUT ALL TRENDS
            </Card.Text>
            </div>
          </Card.ImgOverlay> 
      </Card>
      <ProductList />
    </div>
  );
};

export default Home;
