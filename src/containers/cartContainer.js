import React, { Component } from "react";
import { connect } from "react-redux";
import {PropTypes} from "prop-types";
import Cart from './../components/Cart';
import * as messages from "./../constants/Message";
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as actions from './../actions/index';
class CartContainer extends Component {
    render() {
        var  { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        var {onDeleteProductInCart, onChangeMessage, onChangeQuantity} = this.props;
        var result = <tr>
            <td>{messages.MSG_CART_EMPTY}</td>
        </tr>;
        if(cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onChangeQuantity={onChangeQuantity}
                    />
                );
            });
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length >0 ) {
            var total = 0;
            if(cart.length > 0) {
            for(var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
            }
            result = <CartResult total={total} />
        }
        return result;
    }
}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}
const mapStateToProps = state => {
    return {
       cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actions.removeProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actions.changeMessage(message));
        },
        onChangeQuantity: (product, quantity, amount) => {
            dispatch(actions.changeQuantity(product, quantity, amount));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
