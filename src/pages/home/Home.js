import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./home.css";
import axios from "axios";

export default function Home() {
  let [sample, setSample] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.spoonacular.com/food/menuItems/search?apiKey=0a6c1f585c6b4497a2143f20813504fb&query=burger&number=3",
  //       {
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       setSample(res.data.menuItems);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <header className="header">
        <div className="row">
          <div className="col-md-6  header__left d-flex flex-column">
            <h3 className="logo">
              <Link to="/" className="logo__link">
                dine
              </Link>
            </h3>
            <div className="header__left-txt">
              <h1>Exquisite dining since 1989</h1>
              <p>
                Experience our seasonal menu in beautiful country surroundings.{" "}
                <br />
                Eat the freshest produce from the comfort of our farmhouse.
              </p>
              <Link to="/products" className="primaryLink">
                <button className="primaryBtn">View More</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 d-md-block d-none  header__right">
            <div className="header__right-overlay"></div>
            <img src={require("./../../asset/header2.jpg")} alt="" />
          </div>
        </div>
      </header>
      <main className="main">
        <div className="enjoy my-5 py-5">
          <div className="container">
            <div className="row position-relative">
              <div className="enjoy__overlay"></div>
              <div className="col-md-6 enjoy__left">
                <img src={require("./../../asset/enjoy.jpg")} />
              </div>
              <div className="col-md-6 enjoy__right d-flex flex-column justify-content-center">
                <div className="dot d-flex align-items-center">
                  <div className="dot__dot"></div>
                  <div className="dot__dash"></div>
                </div>
                <div className="enjoy__right-txt">
                  <h2>
                    Enjoyable place for <br />
                    all the family
                  </h2>
                  <p>
                    Our relaxed surroundings make dining with us a great
                    experience for everyone. We can even arrange a tour of the
                    farm before your meal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="most my-5 py-5">
          <div className="container">
            <div className="row position-relative">
              <div className="most__overlay"></div>
              <div className="col-md-6 order-md-1 order-2 most__left d-flex flex-column justify-content-center">
                <div className="dot d-flex align-items-center">
                  <div className="dot__dot"></div>
                  <div className="dot__dash"></div>
                </div>
                <div className="most__right-txt">
                  <h2>
                    The most locally <br />
                    sourced food
                  </h2>
                  <p>
                    All our ingredients come directly from our farm or local
                    fishery. So you can be sure that you're eating the freshest,
                    most sustainable food.
                  </p>
                </div>
              </div>
              <div className="col-md-6 most__left order-md-2 order-1">
                <img src={require("./../../asset/most.jpg")} />
              </div>
            </div>
          </div>
        </div>
        <div className="highlight">
          <div className="container">
            <div className="row">
              <div className="col-md-6 highlight__left d-flex flex-column justify-content-center">
                <div className="dot d-flex align-items-center">
                  <div className="dot__dot"></div>
                  <div className="dot__dash"></div>
                </div>
                <div className="highlight__right-txt">
                  <h2>
                    A few highlights
                    <br /> from our menu
                  </h2>
                  <p>
                    Seared Salmon Fillet Our locally sourced salmon served with
                    a refreshing buckwheat summer salad. We cater for all
                    dietary requirements, but here's a glimpse at some of our
                    diner's favourites. Our menu is revamped every season.
                  </p>
                </div>
              </div>
              <div className="col-md-6 highlight__right ">
                {/* <div className="cat__box d-flex flex-md-row flex-column justify-content-around">
                  <img src={require("./../../asset/test.jpg")} />
                  <div>
                    <h3>Seared Salmon Fillet</h3>
                    <p>
                      Our locally sourced salmon served with a refreshing
                      buckwheat summer salad.
                    </p>
                  </div>
                </div> */}
                {/* 
                {sample.map((item, index) => (
                  <div
                    className="cat__box d-flex flex-md-row flex-column justify-content-around"
                    key={index}
                  >
                    <img src={item.image} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.restaurantChain}</p>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
        <div className="family">
          <div className="container">
            <div className="row">
              <div className="col-md-6 family__left">
                <img src={require("./../../asset/family.jpg")} />
              </div>
              <div className="col-md-6 family__right d-flex flex-column justify-content-center">
                <div className="dot d-flex align-items-center">
                  <div className="dot__dot"></div>
                  <div className="dot__dash"></div>
                </div>
                <div className="enjoy__right-txt">
                  <h2>Family Gathering</h2>
                  <p>
                    We love catering for entire families. So please bring
                    everyone along for a special meal with your loved ones.
                    We'll provide a memorable experience for all
                  </p>
                  <button className="primaryBtn mt-5">Book a table</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reserve">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-md-6 reserve__left d-flex justify-content-center">
                <h3>Ready to make a reservation?</h3>
              </div>
              <div className="col-md-6 reserve__right d-flex justify-content-center">
                <Link to="/table">
                  <button className="primaryBtn">Book a title</button>
                </Link>
              </div>
            </div>
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
      </main>
    </>
  );
}
