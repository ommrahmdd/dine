import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import "./products.css";
export default function Products() {
  let location = useLocation();
  let history = useHistory();
  let pageFromUrl = location.search.split("=")[1];
  let [sample, setSample] = useState([]);
  let [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/v1/dine/products?limit=10&page=${page}`)
      .then((data) => {
        setSample(data.data.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  let handleNexBtn = (e) => {
    history.push({
      search: `?page=${page}`,
    });
    setPage(page + 1);
    backToTop();
  };
  let handlePrevBtn = () => {
    if (page > 1) {
      history.push({
        search: `?page=${page}`,
      });
      setPage(page - 1);
      backToTop();
    }
  };
  let backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <div className="container position-relative">
        <div className="products__overlay"></div>
        <h2>
          <Link to="/" className="logo">
            dine
          </Link>
        </h2>
        <div className="row">
          <div className="col-md-4">
            <h4 className="products__ourProducts">Our Menu</h4>
          </div>
          <div className="col-md-8"></div>
        </div>
        <div className="products__products d-flex flex-column p-4">
          {!sample.length ? (
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            sample.map((item, index) => (
              <Link to="/products/5" className="box__link" key={index}>
                <div className="products__products-box d-flex align-items-center">
                  <img src={item.img}></img>
                  <div className="box__txt">
                    <h3>{item.title}</h3>
                    <p>Category: {item.category}</p>
                    <span>More information</span>
                    <a href="#">{item.url}</a>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        <div className="customGroupBtn my-5">
          <button
            className="secondaryBtn customBtn me-5"
            // hidden={(page = 1 ? true : false)}
            onClick={() => handlePrevBtn()}
          >
            Prev
          </button>
          <button
            className=" primaryBtn customBtn"
            onClick={(e) => handleNexBtn(e)}
          >
            Next
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-4 footer__col  py-m-1 py-5">
              <h2>dine</h2>
            </div>
            <div className="col-md-4 footer__col py-m-1 py-5">
              <p>MARTHWAITE, SEDBERGH </p>
              <p>CUMBRIA </p>
              <p>+00 44 123 4567</p>
            </div>
            <div className="col-md-4 footer__col py-m-1 py-5">
              <p>OPEN TIMES </p>
              <p>MON - FRI: 09:00 AM - 10:00 PM</p>
              <p>SAT - SUN: 09.00 AM - 11:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
