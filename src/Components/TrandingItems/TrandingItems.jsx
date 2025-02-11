/* eslint-disable react/prop-types */
import "./TrandingItems.css"
const TrandingItems = ({data}) => {
  return (
    <div>
      <section className='tranding-section bg-secondary-subtle pt-2'>
        <div className='container-fluid'>
            <div className='row tranding'>
              <h3 className="text-center py-3">Inspired by your shopping trends</h3>
                <div className='col-lg-12'>
                    <div className='row'>
                    {
                        data.slice(0, 6).map(product => (
                            <div key={product.id} className='col-lg-4'>
                            <div className='tranding-item'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <img src= {product.image} className="img-fluid"/>
                                    </div>
                                    <div className='col-8'>
                                        <p>{product.title.substring(0, 50)}...</p>
                                        <p><b>$ {product.price}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                        
                        {/* <div className='col-lg-4'>
                            <div className='tranding-item'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <img src='./img/tranding2.jpg' className="img-fluid"/>
                                    </div>
                                    <div className='col-8'>
                                        <p>Title Tranding product for you. Now Checkout</p>
                                        <p><b>$150</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='tranding-item'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <img src='./img/tranding3.jpg' className="img-fluid"/>
                                    </div>
                                    <div className='col-8'>
                                        <p>Title Tranding product for you. Now Checkout</p>
                                        <p><b>$150</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='tranding-item'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <img src='./img/tranding4.jpg' className="img-fluid"/>
                                    </div>
                                    <div className='col-8'>
                                        <p>Title Tranding product for you. Now Checkout</p>
                                        <p><b>$150</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='tranding-item'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <img src='./img/tranding5.jpg' className="img-fluid"/>
                                    </div>
                                    <div className='col-8'>
                                        <p>Title Tranding product for you. Now Checkout</p>
                                        <p><b>$150</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='tranding-item'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <img src='./img/tranding6.jpg' className="img-fluid"/>
                                    </div>
                                    <div className='col-8'>
                                        <p>Title Tranding product for you. Now Checkout</p>
                                        <p><b>$150</b></p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default TrandingItems
