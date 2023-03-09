import React from "react";
import * as buffer from "buffer";
import { useEffect, useState } from "react";
import * as anchor from "@project-serum/anchor";
import { NavLink } from "react-router-dom";
import Product from "components/product";

export default function Main() {
  return (
    <div id="main">
      <header className="top-bar">
        <NavLink to="/" hidden>
          SOLotery
        </NavLink>
        <NavLink to="/exchange" hidden>
          Exchange
        </NavLink>
      </header>
      <div className="product-container">
        <Product product="foo" />
        <Product product="foo" />
        <Product product="foo" />
        <Product product="foo" />
        <Product product="foo" />
        <Product product="foo" />
        <Product product="foo" />
        <Product product="foo" />
        <Product product="foo" />
      </div>
    </div>
  );
}
