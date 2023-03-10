import React from "react";

class Add extends React.Component {
  render() {
    return (
      <div className="add">
        <img src={this.props.image} alt="Image" />
      </div>
    );
  }
}

export default Add;
