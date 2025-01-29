import { FaChevronCircleRight } from "react-icons/fa"
import "./UnderHOffer.css"
const UnderHOffer = () => {
  return (
    <div>
        <section className="under-offer-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="under-offer p-3">
                <div className="under-offer-heading">
                  <h3 className="py-2">Under $100</h3>
                  <a><b>See all</b> <FaChevronCircleRight className="text-success"/></a>
                </div>
                <div className="row">
                  <div className="col-lg-2 col-6 under-products">
                    <div className="border border-secondary-subtle product-item text-center">
                      <img src="./img/dron1.jpg" className="img img-fluid" alt="N/A"/>
                      <h6 className="mt-2">Dron Title 2024</h6>
                      <p><b>Under $100</b></p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6 under-products">
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
                  </div>
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
