import React, { Component } from "react";
import Header from "./components/Header";
import ProductsContainer from "./containers/ProductsContainer";
import MessageContainer from "./containers/messageContainer";
import Footer from "./components/Footer";
import CartContainer from "./containers/cartContainer";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <MessageContainer />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;