import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <span className="material-symbols-outlined">{this.props.name}</span>
        <p>{this.props.product}</p>
      </div>
    );
  }
}

class ProductList extends React.Component {
  render() {
    return (
      <div className="product-container">
        <Product product="Hardware" name="memory"/>
        <Product product="Software" name="terminal"/>
        <Product product="Books & art" name="menu_book"/>
        <Product product="Computers & accessories" name="computer"/>
        <Product product="Fitness" name="fitness_center"/>
        <Product product="Tools" name="construction"/>
        <Product product="Food & drinks" name="restaurant"/>
        <Product product="Merchandising" name="add_shopping_cart"/>
        <Product product="Home" name="home_work"/>
        <Product product="Personal Care" name="self_care"/>
        <Product product="Industries & office" name="apartment"/>
        <Product product="Pet Shop" name="pets"/>
      </div>
    );
  }
}

export default ProductList;
