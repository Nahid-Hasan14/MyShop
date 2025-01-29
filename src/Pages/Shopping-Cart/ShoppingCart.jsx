import "./ShoppingCart.css"
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function ShoppingCart() {
  return (
    <div>
      <div className="container-fluid pt-5 cart-container">
        <div className="row mx-1">
          <div className="col-lg-9 col-12 p-0">
           <div className="custom-left-main">
            <div className="border-bottom border-primary py-3">
               <h2>Shopping Cart</h2>
               <span> Total Items: (3)</span>
            </div>
            <div className="row p-2 py-3 border-bottom border-primary">
              <div className="col-lg-3 col-5 d-flex gap-1 align-items-center">
                <img src="./img/tranding4.jpg" className="products-img"/>
              </div>
              <div className="col-lg-9 col-7">
                <h6 className="truncate-text">7FT Lighted Palm Tree Color Changing, Artificial Fake Palm Tree with Remote Blue Green Lights, LED Palm Tree for Indoor Outsid</h6>
                <p className="text-success p-0 m-0">In Stock</p>
                <div className="d-flex gap-3 py-2">
                <span><del>$165</del></span>
                <span>$<b>149</b></span>
                </div>
                <div className="d-flex gap-3 align-items-center">
                <div className="d-flex gap-2 single-border justify-content-center">
                  <span role="button"><FaMinus /></span>
                  <span>5</span>
                  <span role="button"><FaPlus /></span>
                </div>
                <p className="m-0 border-start border-primary text-primary ps-2" role="button">Delete</p>
                </div>
              </div>
            </div>
            <div className="row p-2 py-3 border-bottom border-primary">
              <div className="col-lg-3 col-5 d-flex gap-1 align-items-center">
                <img src="./img/tranding4.jpg" className="products-img"/>
              </div>
              <div className="col-lg-9 col-7">
                <h5 className="truncate-text">7FT Lighted Palm Tree Color Changing, Artificial Fake Palm Tree with Remote Blue Green Lights, LED Palm Tree for Indoor Outsid</h5>
                <p className="text-success p-0 m-0">Stock Out</p>
                <div className="d-flex gap-3 py-2">
                <span><del>$165</del></span>
                <span>$<b>149</b></span>
                </div>
                <div className="d-flex gap-3 align-items-center">
                <div className="d-flex gap-2 single-border justify-content-center">
                  <span role="button"><FaMinus /></span>
                  <span>5</span>
                  <span role="button"><FaPlus /></span>
                </div>
                <p className="m-0 border-start border-primary text-primary ps-2" role="button">Delete</p>
                </div>
              </div>
            </div>
            <div className="row p-2 py-3 border-bottom border-primary">
              <div className="col-lg-3 col-5 d-flex gap-1 align-items-center">
                <img src="./img/tranding4.jpg" className="products-img"/>
              </div>
              <div className="col-lg-9 col-7">
                <h5 className="truncate-text">7FT Lighted Palm Tree Color Changing, Artificial Fake Palm Tree with Remote Blue Green Lights, LED Palm Tree for Indoor Outsid</h5>
                <p className="text-success p-0 m-0">In Stock</p>
                <div className="d-flex gap-3 py-2">
                <span><del>$165</del></span>
                <span>$<b>149</b></span>
                </div>
                <div className="d-flex gap-3 align-items-center">
                <div className="d-flex gap-2 single-border justify-content-center">
                  <span role="button"><FaMinus /></span>
                  <span>5</span>
                  <span role="button"><FaPlus /></span>
                </div>
                <p className="m-0 border-start border-primary text-primary ps-2" role="button">Delete</p>
                </div>
              </div>
            </div>
            <div className="text-end py-3 subtotal"><span>Subtotal (3 Items): <b>$543.99</b></span></div>
            </div>
          </div>
          <div className="col-lg-3 col-12 p-0">
             <div className="proceetToCheckout text-center">
                <h5>Subtotal (3 items): $<b>530</b></h5>
                <button className="btn main-btn">Proceed to Order</button>
             </div>
             <div className="d-flex gap-2 primeNotice">
              <img src="./img/prime.svg"/>
              <div>
               <h6>Free fast delivery. No order minimum. Exclusive savings. Start your 30-day free trial of Prime.</h6>
               <button className="btn main-btn">Join Prime</button>
              </div>
             </div>

             <div className="pair-section">
              <h4>Pair with your cart</h4>
              <div className="d-flex gap-2 pair-products">
              <img src="./img/dron2.jpg"/>
              <div>
                <h6 className="short-text">7FT Lighted Palm Tree Color Changing, Artificial Fake Palm Tree with Remote Blue Green Lights, LED Palm Tree for Indoor Outsid</h6>
                <div>
                <span><del>$530</del></span>
                <span>   $<b>530</b></span>
                </div>
                <button className="addToCart-btn">Add to Cart</button>
              </div>
             </div>
              <div className="d-flex gap-2 pair-products">
              <img src="./img/dron2.jpg"/>
              <div>
                <h6 className="short-text">7FT Lighted Palm Tree Color Changing, Artificial Fake Palm Tree with Remote Blue Green Lights, LED Palm Tree for Indoor Outsid</h6>
                <div>
                <span><del>$530</del></span>
                <span>   $<b>530</b></span>
                </div>
                <button className="addToCart-btn">Add to Cart</button>
              </div>
             </div>
              <div className="d-flex gap-2 pair-products">
              <img src="./img/dron2.jpg"/>
              <div>
                <h6 className="short-text">7FT Lighted Palm Tree Color Changing, Artificial Fake Palm Tree with Remote Blue Green Lights, LED Palm Tree for Indoor Outsid</h6>
                <div>
                <span><del>$530</del></span>
                <span>   $<b>530</b></span>
                </div>
                <button className="addToCart-btn">Add to Cart</button>
              </div>
             </div>
              <div className="d-flex gap-2 pair-products">
              <img src="./img/dron2.jpg"/>
              <div>
                <h6 className="short-text">7FT Lighted Palm Tree Color Changing, Artificial Fake Palm Tree with Remote Blue Green Lights, LED Palm Tree for Indoor Outsid</h6>
                <div>
                <span><del>$530</del></span>
                <span>   $<b>530</b></span>
                </div>
                <button className="addToCart-btn">Add to Cart</button>
              </div>
             </div>
              <div className="d-flex gap-2 pair-products">
              <img src="./img/dron2.jpg"/>
              <div>
                <h6 className="short-text">7FT Lighted Palm Tree Color Changing, Artificial Fake Palm Tree with Remote Blue Green Lights, LED Palm Tree for Indoor Outsid</h6>
                <div>
                <span><del>$530</del></span>
                <span>   $<b>530</b></span>
                </div>
                <button className="addToCart-btn">Add to Cart</button>
              </div>
             </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
