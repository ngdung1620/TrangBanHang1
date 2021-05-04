import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "./../components/Products";
import Product from './../components/Product';
import * as actions from './../actions/index';
class ProductsContainer extends Component {
    render() {
        var  { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts(products) {
        var result = null;
        var { onAddToCart, onChangeMessage} = this.props;
        if(products.length > 0) {
           result = products.map((product, index) => {
              return  <Product key={index} product={product} addToCart={onAddToCart} onchangeMessage={onChangeMessage}/>
          });
        }
        return result;
      }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product)=> {
            dispatch(actions.addToCard(product,1))
        },
        onChangeMessage: (message) => {
            dispatch(actions.changeMessage(message));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
