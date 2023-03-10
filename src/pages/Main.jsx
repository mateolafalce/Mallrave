import React, { useState, useEffect } from "react";
import * as buffer from "buffer";
import * as anchor from "@project-serum/anchor";
import TopBar from "components/top-bar";
import Add from "components/add";
import ProductList from "components/product";
import Footer from "components/footer";

export default function Main() {
  const [image, setImage] = useState(
    "https://previews.123rf.com/images/ylivdesign/ylivdesign1708/ylivdesign170826786/84439977-publicidad-y-pr-banner-horizontal-concepto-ilustraci%C3%B3n-plana-de-publicidad-y-pr-banner-concepto-de.jpg"
  );

  return (
    <div>
      <TopBar />
      <Add image={image} />
      <ProductList />
      <Footer/>
    </div>
  );
}
