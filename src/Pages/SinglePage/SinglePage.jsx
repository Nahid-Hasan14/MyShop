import "./SinglePage.css"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";

export default function SinglePage() {
  return (
    <div>
      <div className='container singlePage-container '>
        <div className='row bg-white'>
            <div className='col-md-5 col-12'>
                    <ul className="d-flex d-md-none gap-3 text-primary list-unstyled mt-3 ps-2" role="button">
                        <li>Home<MdOutlineKeyboardArrowRight /></li>
                        <li>Category<MdOutlineKeyboardArrowRight /></li>
                        <li>Product Details</li>
                    </ul>
                <div className="img-section singlePage-section border border-primary">
                    <img src='./img/dron2.jpg'/>
                    <div className="more-img" role="button">
                        <img src="./img/dron1.jpg"/>
                        <img src="./img/dron1.jpg"/>
                        <img src="./img/dron1.jpg"/>
                    </div>
                </div>
            </div>
            <div className='col-md-7 col-12'>
                <div className="productdatils singlePage-section">
                    <ul className="d-none d-md-flex gap-3 text-primary list-unstyled">
                        <li role="button">Home<MdOutlineKeyboardArrowRight /></li>
                        <li role="button">Category<MdOutlineKeyboardArrowRight /></li>
                        <li role="button">Product Details</li>
                    </ul>
                    <h5 className="text-body-tertiary">Category</h5>
                    <p>TREO All Fresh Premier Glass Tiffin Set of 8, Microwave Safe, Dishwasher safe 6 Containers Lunch Box  (2210 ml)</p>
                    <div className="price-part">
                        <p className="fs-6 text-success pt-3">Special Price</p>
                        <div className="d-flex align-items-center gap-4">
                         <p className="fs-3">$525</p>
                         <p><del>$600</del></p>
                         <p className="text-success">15% OFF</p>
                        </div>
                    </div>
                    <div className="offer pt-2">
                        <h5>Available offers</h5>
                        <p><MdLocalOffer  className="text-primary fs-3 pe-2"/> <b>Special Price</b> Get extra 17% off (price inclusive of cashback/coupon) <span className="text-primary" role="button">T&C</span></p>
                        <p><MdLocalOffer  className="text-primary fs-3 pe-2"/> <b>Special Price</b> Get extra 17% off (price inclusive of cashback/coupon) <span className="text-primary" role="button">T&C</span></p>
                        <p><MdLocalOffer  className="text-primary fs-3 pe-2"/> <b>Special Price</b> Get extra 17% off (price inclusive of cashback/coupon) <span className="text-primary" role="button">T&C</span></p>
                        <p><MdLocalOffer  className="text-primary fs-3 pe-2"/> <b>Special Price</b> Get extra 17% off (price inclusive of cashback/coupon) <span className="text-primary" role="button">T&C</span></p>
                    </div>
                    <button className="btn main-btn mt-2">Add to cart</button>
                    <div className="mt-3 pb-3">
                        <h5>Description</h5>
                        <p className="fs-6">Oliveware Teso Pro Lunch Box is made using only the best quality materials. This Lunch Box is Ideal for office executives and college students, this Lunch Box comes with 3 unique Air-tight and spill proof Stainless Steel containers (290ml, 450ml, 600ml) with Steel Cutlery & Steel Water Bottle(750ml) + Plastic Pickle Box(130ml) that keep food fresh and crisp for hours. This Containers is Microwave Safe (without Lids). The containers have air tight lids which is BPA Free. This will prevent moisture from damaging your cooked food. These lids are also leak-proof so your food will not come out from the container even if its semi-liquid.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
