import React from "react";
import "./cart.css";
import pic5 from "./../../images/shop/shop-cart/pic4.jpg";
import picc2 from "./../../images/shop/shop-cart/pic4.jpg"
import CartProduct from "./CartProduct";
export default function CCart() {
  return (
    <div>
      <div
        className="dz-bnr-inr style-1"
        style={{
          backgroundImage:
            "url(https://petperks.dexignzone.com/xhtml/images/background/bg-shape.jpg)",
        }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry">
            <h1>Shop Standard</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row ">
              <ul className="breadcrumb text-center">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">Shop Standard</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="content-inner shop-account bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="table-responsive">
                <table className="table check-tbl">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th></th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <CartProduct />
                  </tbody>
                </table>
              </div>
              <div class="row shop-form m-t30">
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="input-group mb-0">
                      <input
                        name="dzEmail"
                        required="required"
                        type="text"
                        class="form-control"
                        placeholder="Coupon Code"
                      />
                      <div class="input-group-addon">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          class="btn coupon"
                        >
                          Apply Coupon
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mt-5">
                  <a href="shop-cart.html" class="btn btn-secondary">
                    UPDATE CART
                  </a>
                </div>
              </div>
            </div>
            {/* rightcart */}

            <div class="col-lg-4">
              <h6 class="title mb15 font-20">Cart Total</h6>
              <div class="cart-detail">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-secondary w-100 m-b20"
                >
                  Bank Offer 5% Cashback
                </a>
                <div class="icon-bx-wraper style-4 m-b15">
                  <div class="icon-bx">
                         <i class="fa-solid fa-ship myship"></i>
                  </div>
                  <div class="icon-content">
                    <span class="font-13 text-black">FREE</span>
                    <h6 class="dz-title font-16">Enjoy The Product</h6>
                  </div>
                </div>
                <div class="icon-bx-wraper style-4 m-b30">
                  <div class="icon-bx">
                  <i class="fa-solid fa-box myship"></i>
                  </div>
                  <div class="icon-content">
                    <h6 class="dz-title">Enjoy The Product</h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </p>
                  </div>
                </div>
                <div class="save-text">
                  <i class="icon feather icon-check-circle"></i>
                  <span class="m-l10">You will save ₹504 on this order</span>
                </div>
                <table>
                  <tbody>
                    <tr class="total">
                      <td>
                        <h6 class="mb-0">Total</h6>
                      </td>
                      <td class="price">$125.75</td>
                    </tr>
                  </tbody>
                </table>
                <a href="shop-checkout.html" class="btn btn-secondary w-100">
                  PLACE ORDER
                </a>
              </div>
            </div>

            {/* endrightcart */}
          </div>
        </div>
      </div>

      {/* endcontent */}
    </div>
  );
}
