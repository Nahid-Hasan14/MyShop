/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./BestProducts.css"

const BestProducts = ({data}) => {

  return (
    <div>
      <section className="best-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 col-12">
              <div className="bestProducts p-3">
                <h3 className="py-2">Best Of Cetagory</h3>
                <div className="row">
                 {data.slice(0, 4).map(product=> {
                  const {title, price, id, image, category}= product;
                  return (
                  <div key={id} className="col-lg-3 col-6 best-products">
                    <div className="border border-secondary-subtle product-item text-center">
                      <Link to={`/category/${category}`} state={{data: data}}><img src= {image} className="img img-fluid" alt="N/A"/></Link>
                      <Link to={`/category/${category}`} state={{data}}><h6>{title.substring(0, 45)}...</h6></Link>
                      <p><b>$ {price}</b></p>
                      <button className="btn btn-info">Add to Cart</button>
                    </div>
                  </div>
                 )})}
                  {/* <div className="col-lg-3 col-6 best-products">
                    <div className="border border-secondary-subtle product-item text-center">
                      <img src="./img/dron2.jpg" className="img img-fluid" />
                      <h6>Dron Title 2024</h6>
                      <p><b>$ 430</b></p>
                      <button className="btn btn-info">Cart</button>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6 best-products">
                    <div className="border border-secondary-subtle product-item text-center">
                      <img src="./img/dron4.jpg" className="img img-fluid" />
                      <h6>Dron Title 2024</h6>
                      <p><b>$ 430</b></p>
                      <button className="btn btn-info">Cart</button>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6 best-products">
                    <div className="border border-secondary-subtle product-item text-center">
                      <img src="./img/dron5.jpg" className="img img-fluid" />
                      <h6>Dron Title 2024</h6>
                      <p><b>$ 430</b></p>
                      <button className="btn btn-info">Cart</button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12">
             <div className="bestProducts p-3">
                <div className="best-offer-banner">
                  <img src="./img/dron3.webp" className="img img-fluid"/>
                <div className="best-banner-text">
                   <p>Best Selling Product</p>
                </div>
                </div>
             </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestProducts;
