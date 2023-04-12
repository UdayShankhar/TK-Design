import React from "react";
// import "./TerryKartHomePage.css";
import {  AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
function TerryKartHomePage() {
  return (
    <>
      <div class="row">
        <div className="col-xxl-3 col-lg-3 col-md-4 d-flex justify-content-center align-items-center">
          {/* <AiOutlineMenu /> */}
          <h4 className="ml-2">
            TerryKart{" "}
            <span>
              <small>.com</small>
            </span>
          </h4>
        </div>
        <div className="col-xxl-6 col-lg-6 col-md-4">
          <div class="input-group mb-3 mt-3">
            <input
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
              placeholder="What are you looking for?"
            />
            <span class="input-group-text">
              <AiOutlineSearch />
            </span>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-3 col-md-4 d-flex justify-content-evenly align-items-center">
          <p className="mt-3">Account</p>
          <AiOutlineHeart />
          <BsBag />
        </div>
      </div>
    </>
  );
}

export default TerryKartHomePage;
