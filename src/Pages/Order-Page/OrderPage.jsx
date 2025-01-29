import "./Order-Page.css"

const OrderPage = () => {
  return (
    <div>
     <section className='order-section'>
      <div className='container'>
        <div className='row mt-5 pt-5'>
            <div className='col-lg-3'>
                <div className='order-user'>
                    <h4> Md Nahid Hasan</h4>
                    <a className='verified-user'>Verified User</a>
                  <div className='order-manage-account'>
                      <h3>Manage My Account</h3>
                      <ul className='profile-part'>
                        <li>
                          My Profile
                        </li>
                        <li>
                          My Address Book
                        </li>
                        <li>
                          My Payment Option
                        </li>
                      </ul>
                </div>
                </div>
            </div>
            <div className='col-lg-9'>
                <div className='orderPage-heading'>
                    <h3 className='myOrder-heading'>My Order</h3>  
                <div className='show-order pt-2'>
                    <h4 className='category-border'>Category</h4>
                    <div className=' row show-order-details'>
                        <div className='col-lg-2 product-img'>
                            <img className='order-img' src='./public/img/nahid.jpg'/>
                        </div>
                        <div className='col-lg-4'>Multi-functional spinner Children Luminous Electronic Watch/ Luminous Dial Waterproof</div>
                        <div className='col-lg-2'>Qnt: 1</div>
                        <div className='col-lg-2'>$: 12001</div>
                        <div className='col-lg-2'>Active</div>
                    </div>
                </div>

                <div className='show-order pt-2'>
                    <h4 className='category-border'>Category</h4>
                    <div className=' row show-order-details'>
                        <div className='col-lg-2 product-img'>
                            <img className='order-img' src='./public/img/nahid.jpg'/>
                        </div>
                        <div className='col-lg-4'>Multi-functional spinner Children Luminous Electronic Watch/ Luminous Dial Waterproof</div>
                        <div className='col-lg-2'>Qnt: 1</div>
                        <div className='col-lg-2'>$: 12001</div>
                        <div className='col-lg-2'>Cencel</div>
                    </div>
                </div>

                <div className='show-order pt-2'>
                    <h4 className='category-border'>Category</h4>
                    <div className=' row show-order-details'>
                        <div className='col-lg-2 product-img'>
                            <img className='order-img' src='./public/img/nahid.jpg'/>
                        </div>
                        <div className='col-lg-4'>Multi-functional spinner Children Luminous Electronic Watch/ Luminous Dial Waterproof</div>
                        <div className='col-lg-2'>Qnt: 1</div>
                        <div className='col-lg-2'>$: 12001</div>
                        <div className='col-lg-2'>Completed</div>
                    </div>
                </div>

                <div className='show-order pt-2'>
                    <h4 className='category-border'>Category</h4>
                    <div className=' row show-order-details'>
                        <div className='col-lg-2 product-img'>
                            <img className='order-img' src='./public/img/nahid.jpg'/>
                        </div>
                        <div className='col-lg-4'>Multi-functional spinner Children Luminous Electronic Watch/ Luminous Dial Waterproof</div>
                        <div className='col-lg-2'>Qnt: 1</div>
                        <div className='col-lg-2'>$: 12001</div>
                        <div className='col-lg-2'>Completed</div>
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

export default OrderPage
