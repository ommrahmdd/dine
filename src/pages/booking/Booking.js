import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../home/home.css";
import "./booking.css";
export default function Booking() {
  let [tables, setTables] = useState({
    name: "",
    email: "",
    numberOfPersons: 1,
    date: "",
    time: "",
  });

  let handleForm = (e) => {
    setTables((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    console.log(tables);
  };
  let handlesSubmit = (e) => {
    e.preventDefault();
    console.log(tables);
  };

  return (
    <>
      <div className="container position-relative">
        <img
          src={require("./../../asset/booking_bg.jpg")}
          className="position-absolute d-md-block d-none overlay__photo"
        />
        <h2>
          <Link to="/" className="logo">
            dine
          </Link>
        </h2>
        <div className="row">
          <div className=" col-md-6 booking__left">
            <form onSubmit={(e) => handlesSubmit(e)}>
              <div className="formBox">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="like Mark Henderson"
                  value={tables.name}
                  name="name"
                  onChange={(e) => handleForm(e)}
                  required
                />
              </div>
              <div className="formBox">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  value={tables.email}
                  name="email"
                  onChange={(e) => handleForm(e)}
                  required
                />
              </div>
              <div className="formBox">
                <label htmlFor="persons">Number of persons</label>
                <input
                  type="number"
                  id="persons"
                  placeholder="4"
                  min="1"
                  name="numberOfPersons"
                  value={tables.numberOfPersons}
                  onChange={(e) => handleForm(e)}
                  required
                />
              </div>
              <div className="formBox">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  value={tables.date}
                  name="date"
                  onChange={(e) => handleForm(e)}
                  required
                />
              </div>
              <div className="formBox">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  id="time"
                  value={tables.time}
                  name="time"
                  onChange={(e) => handleForm(e)}
                  required
                />
              </div>
              <div className="d-flex justify-content-end mt-5">
                <button className="secondaryBtn">
                  <Link to="/" className="booking__backLink">
                    Back
                  </Link>
                </button>
                <button className="primaryBtn ms-2">Book</button>
              </div>
            </form>
          </div>
          <div className=" col-md-6 booking__right d-md-flex justify-content-center  d-none">
            <img src={require("./../../asset/booking.jpg")} />
          </div>
        </div>
      </div>
    </>
  );
}
