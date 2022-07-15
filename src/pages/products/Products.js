import React from "react";
import { Link } from "react-router-dom";
import "./products.css";
export default function Products() {
  return (
    <>
      <div className="container">
        <h2>
          <Link to="/" className="logo">
            dine
          </Link>
        </h2>
        <div className="row">
          <div className="col-md-4">
            <h4 className="products__ourProducts">Our Products</h4>
          </div>
          <div className="col-md-8"></div>
        </div>
        <div className="products__products d-flex flex-column p-4">
          <div className="products__products-box d-flex align-items-center">
            <img src={require("./../../asset/header.jpg")}></img>
            <div className="box__txt">
              <h3>Title</h3>
              <p>Lorem</p>
            </div>
          </div>
          <Link to="/products/5" className="box__link">
            <div className="products__products-box d-flex align-items-center">
              <img src={require("./../../asset/header.jpg")}></img>
              <div className="box__txt">
                <h3>Handi Chicken</h3>
                <p>Category: lorem</p>
                <span>More information</span>
                <a href="#">
                  https://recipes.timesofindia.com/us/recipes/handi-chicken/rs75543821.cms{" "}
                </a>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
