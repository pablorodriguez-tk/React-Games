import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import './cart.css';

const Cart = () => {
  const { cart } = useAppContext();

  return (
    <div className="cart_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cart_container">
              <div className="cart_title">
                Shopping Cart<small> ({cart.length} item in your cart) </small>
              </div>
              <div className="cart_items">
                <ul className="cart_list">
                  {cart.map((product) => (
                    <li className="cart_item clearfix" key={product.gameID}>
                      <div className="cart_item_image">
                        <img src={product.thumb} alt={product.title} />
                      </div>
                      <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_name cart_info_col">
                          <div className="cart_item_title">Name</div>
                          <div className="cart_item_text">{product.title}</div>
                        </div>
                        <div className="cart_item_quantity cart_info_col">
                          <div className="cart_item_title">Quantity</div>
                          <div className="cart_item_text">1</div>
                        </div>
                        <div className="cart_item_price cart_info_col">
                          <div className="cart_item_title">Price</div>
                          <div className="cart_item_text">
                            $
                            {product.isOnSale === '1'
                              ? product.salePrice
                              : product.normalPrice}
                          </div>
                        </div>
                        <div className="cart_item_total cart_info_col">
                          <div className="cart_item_title">Total</div>
                          <div className="cart_item_text">
                            $
                            {product.isOnSale === '1'
                              ? product.salePrice
                              : product.normalPrice}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order_total">
                <div className="order_total_content text-md-right">
                  <div className="order_total_title">Order Total:</div>
                  <div className="order_total_amount">$</div>
                </div>
              </div>

              <div className="cart_buttons">
                <Link to="/" className="button cart_button_clear">
                  Continue Shopping
                </Link>
                <button type="button" className="button cart_button_checkout">
                  Go to payment method
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
