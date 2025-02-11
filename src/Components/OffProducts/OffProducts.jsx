/* eslint-disable react/prop-types */
import "./OffProducts.css"
import { FaChevronCircleRight } from "react-icons/fa";

const OffProducts = ({menClothing, womenClothing, jewelery}) => {
  return (
    <div>
      <section className='off-section'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-4 col-12'>
                    <div className='products-view'>
                        <div className="off-heading">
                           <h4>{womenClothing.length > 0 ? womenClothing[0].category : "Best product for you"}</h4>
                           <FaChevronCircleRight className="off-icon"/>
                        </div>
                        <div className='row'>
                         {
                            womenClothing.slice(0, 4).map(product => (
                                <div key={product.id} className=' col-6 px-2 mb-2'>
                            <div className='off-item border rounded'>
                                <img src={product.image} className="img img-fluid rounded"/>
                                <p className="mt-2">{product.title.substring(0, 12)}...</p>
                                <p className="text-success">Min.10% OFF</p>
                            </div>
                            </div>
                            ))
                         }
                            {/* <div className=' col-6 px-2'>
                            <div className='off-item border rounded mb-2'>
                                <img src="./img/winter2.jpg" className="img img-fluid rounded"/>
                                <p className="mt-2">Product Name</p>
                                <p className="text-success">Min.10% OFF</p>
                            </div>
                            </div>
                            <div className=' col-6 px-2'>
                            <div className='off-item border rounded'>
                                <img src="./img/winter3.jpg" className="img img-fluid rounded"/>
                                <p className="mt-2">Product Name</p>
                                <p className="text-success">Min.10% OFF</p>
                            </div>
                            </div>
                            <div className=' col-6 px-2'>
                            <div className='off-item border rounded'>
                                <img src="./img/winter4.jpg" className="img img-fluid rounded"/>
                                <p className="mt-2">Product Name</p>
                                <p className="text-success">Min.10% OFF</p>
                            </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <div className='products-view'>
                        <div className="off-heading">
                           <h4>{menClothing.length > 0 ? menClothing[0].category : "Best Product for You"}</h4>
                           <FaChevronCircleRight className="off-icon"/>
                        </div>
                        <div className='row'>
                        {
                            menClothing.slice(0, 4).map(product => (
                                <div key={product.id} className='col-6 px-2 mb-2'>
                            <div className='off-item border rounded'>
                                <img src= {product.image} className="img img-fluid rounded"/>
                                <p className="mt-2">{product.title.substring(0, 12)}...</p>
                                <p className="text-success">Min.10% OFF</p>
                            </div>
                            </div>
                            ))
                        }
                            
                            {/* <div className='col-6 px-2'>
                            <div className='off-item border rounded mb-2'>
                                <img src="./img/winter2.jpg" className="img img-fluid rounded"/>
                                <p className="mt-2">Product Name</p>
                                <p className="text-success">Min.10% OFF</p>
                            </div>
                            </div>
                            <div className='col-6 px-2'>
                            <div className='off-item border rounded'>
                                <img src="./img/winter3.jpg" className="img img-fluid rounded"/>
                                <p className="mt-2">Product Name</p>
                                <p className="text-success">Min.10% OFF</p>
                            </div>
                            </div>
                            <div className='col-6 px-2'>
                            <div className='off-item border rounded'>
                                <img src="./img/winter4.jpg" className="img img-fluid rounded"/>
                                <p className="mt-2">Product Name</p>
                                <p className="text-success">Min.10% OFF</p>
                            </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <div className='products-view'>
                        <div className="off-heading">
                           <h4>{jewelery.length > 0 ? jewelery[0].category : "Best Product for You"}</h4>
                           <FaChevronCircleRight className="off-icon"/>
                        </div>
                        <div className='row'>
                        {
                            jewelery.slice(0,4).map(product=> (
                                <div key={product.id} className='col-6 px-2 mb-2'>
                            <div className='off-item border rounded'>
                                <img src= {product.image} className="img img-fluid rounded"/>
                                <p className="mt-2">{product.title.substring(0,12)}...</p>
                                <p className="text-success">Min.10% OFF</p>
                            </div>
                            </div>
                            ))
                        }
                            
                            {/* <div className='col-6 px-2'>
                            <div className='off-item border rounded mb-2'>
                                <img src="./img/winter2.jpg" className="img img-fluid rounded"/>
                                <p className="mt-2">Product Name</p>
                                <p className="text-success">Min.10% OFF</p>
                            </div>
                            </div>
                            <div className='col-6 px-2'>
                            <div className='off-item border rounded'>
                                <img src="./img/winter3.jpg" className="img img-fluid rounded"/>
                                <p className="mt-2">Product Name</p>
                                <p className="text-success">Min.10% OFF</p>
                            </div>
                            </div>
                            <div className='col-6 px-2'>
                            <div className='off-item border rounded'>
                                <img src="./img/winter4.jpg" className="img img-fluid rounded"/>
                                <p className="mt-2">Product Name</p>
                                <p className="text-success">Min.10% OFF</p>
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

export default OffProducts;
