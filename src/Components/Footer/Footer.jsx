import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <section className='footer-section mt-3'>
        <div className='container'>
        <div className='row p-5'>
            <div className='col-lg-3 col-6 about-us'>
               <h4>Get to Know Us</h4>
               <p className="mt-4">Careers</p>
               <p>About Us</p>
               <p>Contact Us</p>
               <p>Partnership</p>
               <p>Press</p>
               <p>Investor Relations</p>
            </div>
            <div className='col-lg-3 col-6 about-us'>
                <h4>For Help</h4>
                <p className="mt-4">For Profile</p>
                <p>For Order</p>
                <p>For Canselation & Returns</p>
                <p>For Shipping</p>
            </div>
            <div className='col-lg-3 col-6 about-us'>
                <h4>Cosumer Policy</h4>
                <p className="mt-4">Security</p>
                <p>Our Policy</p>
                <p>Privacy</p>
                <p>Contitions</p>
            </div>
            <div className='col-lg-3 col-6 about-us'>
                <h4>Address</h4>
                <p className="mt-4">11 No Sector, Mipur, Dhaka-1250</p>
                <p>Mobile: 017XXXXXXXX</p>
                <p>Mail: mail@gmail.com</p>
                <p>Hot Line: mail@gmail.com</p>
            </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
