/* eslint-disable react/prop-types */
import { FaChevronCircleRight } from "react-icons/fa"
import "./UnderHOffer.css"
import { Link } from "react-router-dom"
const UnderHOffer = ({underOffer}) => {
  return (
    <div>
        <section className="under-offer-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="under-offer p-3">
                <div className="under-offer-heading">
                  <h3 className="py-2">Under $100</h3>
                  <Link to={`/category/${underOffer.length > 0 ? underOffer[0].category : "Under 100 offer"}`} state={{data: underOffer}}><a><b>See all</b> <FaChevronCircleRight className="text-success"/></a></Link>
                </div>
                <div className="row">
                {
                  underOffer.slice(0, 6).map(product =>(
                    <div key={product.id} className="col-lg-2 col-6 under-products">
                    <div className="border border-secondary-subtle product-item text-center">
                      <Link to={`/category/${product.category}`} state={{data: underOffer}}><img src= {product.image} className="img img-fluid" alt="N/A"/></Link>
                      <Link to={`/category/${product.category}`} state={{data: underOffer}}><h6 className="mt-2">{product.title.substring(0, 18)}....</h6></Link>
                      <p><b>{product.price}</b></p>
                    </div>
                  </div>
                  ))
                }
                  
                  {/* <div className="col-lg-2 col-6 under-products">
                    <div className="border border-secondary-subtle product-item text-center">
                      <img src="./img/dron2.jpg" className="img img-fluid" />
                      <h6 className="mt-2">Dron Title 2024</h6>
                      <p><b>Under $100</b></p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6 under-products">
                    <div className="border border-secondary-subtle product-item text-center">
                      <img src="./img/dron4.jpg" className="img img-fluid" />
                      <h6 className="mt-2">Dron Title 2024</h6>
                      <p><b>Under $100</b></p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6 under-products">
                    <div className="border border-secondary-subtle product-item text-center">
                      <img src="./img/dron5.jpg" className="img img-fluid" />
                      <h6 className="mt-2">Dron Title 2024</h6>
                      <p><b>Under $100</b></p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6 under-products">
                    <div className="border border-secondary-subtle product-item text-center">
                      <img src="./img/dron5.jpg" className="img img-fluid" />
                      <h6 className="mt-2">Dron Title 2024</h6>
                      <p><b>Under $100</b></p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6 under-products">
                    <div className="border border-secondary-subtle product-item text-center">
                      <img src="./img/dron5.jpg" className="img img-fluid" />
                      <h6 className="mt-2">Dron Title 2024</h6>
                      <p><b>Under $100</b></p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UnderHOffer
