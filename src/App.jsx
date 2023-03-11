import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";
import React, { Component } from 'react';

class App extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
      <div></div>
      )
    }

    return (
      <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
  }
}


export default App;
