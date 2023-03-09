import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <img
          src="https://www.freeiconspng.com/thumbs/book-png/book-png-26.png"
          alt="Image"
        ></img>
        <div className="product-data">
          <p>{this.props.product}</p>
        </div>
      </div>
    );
  }
}

export default Product;
