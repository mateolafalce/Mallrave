import React from "react";
import { NavLink } from "react-router-dom";

class Product extends React.Component {
  render() {
    return (
      <div>
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
        <NavLink to="/hardware" className="product">
          <Product product="Hardware" name="memory"/>
        </NavLink>
        <NavLink to="/software" className="product">
          <Product product="Software" name="terminal"/>
        </NavLink>
        <NavLink to="/books&art" className="product">
          <Product product="Books & art" name="menu_book"/>
        </NavLink>
        <NavLink to="/computers&accessories" className="product">
          <Product product="Computers & accessories" name="computer"/>
        </NavLink>
        <NavLink to="/fitness" className="product">
          <Product product="Fitness" name="fitness_center"/>
        </NavLink>
        <NavLink to="/tools" className="product">
          <Product product="Tools" name="construction"/>
        </NavLink>
        <NavLink to="/food&drinks" className="product">
          <Product product="Food & drinks" name="restaurant"/>
        </NavLink>
        <NavLink to="/merchandising" className="product">
          <Product product="Merchandising" name="add_shopping_cart"/>
        </NavLink>
        <NavLink to="/home" className="product">
          <Product product="Home" name="home_work"/>
        </NavLink>
        <NavLink to="/personalcare" className="product">
          <Product product="Personal Care" name="self_care"/>
        </NavLink>
        <NavLink to="/industries&office" className="product">
          <Product product="Industries & office" name="apartment"/>
        </NavLink>
        <NavLink to="/petshop" className="product">
          <Product product="Pet Shop" name="pets"/>
        </NavLink>
      </div>
    );
  }
}

export default ProductList;
