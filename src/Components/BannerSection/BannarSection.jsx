import "./BannerSection.css"

const BannarSection = () => {
  return (
    <div>
      <section className="banner-section">
      <div className="container-fluid">
       <div className="row custom-row">
         <div className="col-lg-4 col-12 banner-item">
            <img src="./img/furniture.jpg" className="img img-fluid"/>
         </div>
         <div className="col-lg-4 col-12 banner-item">
            <img src="./img/mobile.jpg" className="img img-fluid"/>
         </div>
         <div className="col-lg-4 col-12 banner-item">
            <img src="./img/watch1.jpg" className="img img-fluid"/>
         </div>
       </div>
      </div>
      </section>
    </div>
  )
}

export default BannarSection
