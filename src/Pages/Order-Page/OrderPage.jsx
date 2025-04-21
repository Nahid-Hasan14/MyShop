import "./Order-Page.css"

const OrderPage = () => {
  return (
    <div>
     <section className='order-section'>
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
      </section>
    </div>
  )
}

export default OrderPage
