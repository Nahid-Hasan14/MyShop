import "./BestProducts.css"

const BestProducts = () => {
  return (
    <div>
      <section className="best-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 col-12">
              <div className="bestProducts p-3">
                <h3 className="py-2">Best Of Cetagory</h3>
                <div className="row">
                  <div className="col-lg-3 col-6 best-products">
                    <div className="border border-secondary-subtle product-item text-center">
                      <img src="./img/dron1.jpg" className="img img-fluid" alt="N/A"/>
                      <h6>Dron Title 2024</h6>
                      <p><b>$ 430</b></p>
                      <button className="btn btn-info">Cart</button>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6 best-products">
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
                  </div>
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
