import "./Checkout.css";

export default function Checkout() {
  return (
    <section>
      <div className="container pt-3 checkout-container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="d-flex justify-content-between custom-address">
              <div>
                <h3>Delivery Address (Required)</h3>
                <div className="d-flex gap-4">
                <span><b>Md Nahid Hasan</b></span>
                <span><b>(01774641500)</b></span>
                </div>
                <p>Kochakata-5660, Nageswari, Kurigram, Rangpur</p>
              </div>
              <div className="shiping-address">
                <span role="button">Change Shiping Address</span>
              </div>
            </div>

            <div className="payment-method">
              <h3>Payment Method</h3>
              <div>
              <div className="card-option">
                <span>Pay <b className="text-danger">$736.98/month for 12 months</b> (plus S&H, tax) instead of <b className="text-danger">$8,843.76</b> now, when you choose 0% interest financing with equal monthly payments upon approval for an Amazon Store Card.</span>
                <div><button>Learn more</button></div>
              </div>
                <div className="delivery-option">
                  <input type="radio" name="payment-method" id="cashOnDelivery"/>
                  <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                </div>
                    <div className="delivery-option">
                      <span>
                        <b>Mobile Banking:</b>
                      </span>
                      <div className="row">
                        <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                          <input type="radio" name="payment-method" id="bkash"/>
                          <label htmlFor="bkash">Bkash</label>
                        </div>

                        <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                          <input type="radio" name="payment-method" id="nagot"/>
                          <label htmlFor="nagot">Nagot</label>
                        </div>

                        <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                          <input type="radio" name="payment-method" id="roket"/>
                          <label htmlFor="roket">Roket</label>
                        </div>

                        <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                          <input type="radio" name="payment-method" id="cellfin"/>
                          <label htmlFor="cellfin">Cellfin</label>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="order-calculate">
              <span className="use-payment">Use this payment method</span>
              <h4 className="mt-2 border-bottom border-primary py-2">Your Order</h4>
              <div className="">
                <div className="d-flex justify-content-between">
                  <span>Items:</span>
                  <span>$500</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Price:</span>
                  <span>$500</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Delivery Charge:</span>
                  <span>$20</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Total-Discount:</span>
                  <span>$500</span>
                </div>
                <div className="d-flex justify-content-between border-bottom border-primary pb-2">
                  <span>Sub-Total:</span>
                  <span>$1180</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span><b>Total Price:</b></span>
                  <span><b>$1200</b></span>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3"><button className="btn main-btn">Confirm Order</button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
