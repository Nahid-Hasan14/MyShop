import { useEffect, useState } from "react";
import "./SinglePage.css"
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumbs from "../../Components/Breadcrumbs";

export default function SinglePage() {
    const {id} = useParams()
    const [products, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        const apiURl = `https://fakestoreapi.com/products/${id}`;

        axios.get(apiURl)
        .then(responce => {
            setProduct(responce.data)
            setLoading(false)
        })
        .catch(error=> {
            setError(error)
            setLoading(false)
        })
    }, [id])

    if(loading){
        return <div>Data is Loading........</div>
      }
    if(error){
        return <div>Error: {error.message}</div>
      }
    if (!products) {
        return <div>No product found.</div>;
      }

    //   console.log(products)
  return (
    <div>
      <div className='container singlePage-container '>
        <div className='row bg-white'>
            <div className='col-md-5 col-12'>
                    <ul className="d-flex d-md-none gap-3 text-primary list-unstyled mt-3 ps-2" role="button">
                    <Breadcrumbs />
                        {/* <li>Home<MdOutlineKeyboardArrowRight /></li>
                        <li>Category<MdOutlineKeyboardArrowRight /></li>
                        <li>Product Details</li> */}
                    </ul>
                <div className="img-section singlePage-section border border-primary">
                    <img src={products.image}/>
                    <div className="more-img" role="button">
                        <img src="./img/dron1.jpg"/>
                        <img src="./img/dron1.jpg"/>
                        <img src="./img/dron1.jpg"/>
                    </div>
                </div>
            </div>
            <div className='col-md-7 col-12'>
                <div className="productdatils singlePage-section">
                    <ul className="d-none d-md-flex gap-3 text-primary list-unstyled">
                    <Breadcrumbs />
                        {/* <li role="button">Home<MdOutlineKeyboardArrowRight /></li>
                        <li role="button">Category<MdOutlineKeyboardArrowRight /></li>
                        <li role="button">Product Details</li> */}
                    </ul>
                    <h5 className="text-body-tertiary">Category</h5>
                    <p>{products.title}</p>
                    <div className="price-part">
                        <p className="fs-6 text-success pt-3">Special Price</p>
                        <div className="d-flex align-items-center gap-4">
                         <p className="fs-3">${products.price}</p>
                         <p><del>$600</del></p>
                         <p className="text-success">15% OFF</p>
                        </div>
                    </div>
                    <div className="offer pt-2">
                        <h5>Available offers</h5>
                        <p><MdLocalOffer  className="text-primary fs-3 pe-2"/> <b>Special Price</b> Get extra 17% off (price inclusive of cashback/coupon) <span className="text-primary" role="button">T&C</span></p>
                        <p><MdLocalOffer  className="text-primary fs-3 pe-2"/> <b>Special Price</b> Get extra 17% off (price inclusive of cashback/coupon) <span className="text-primary" role="button">T&C</span></p>
                        <p><MdLocalOffer  className="text-primary fs-3 pe-2"/> <b>Special Price</b> Get extra 17% off (price inclusive of cashback/coupon) <span className="text-primary" role="button">T&C</span></p>
                        <p><MdLocalOffer  className="text-primary fs-3 pe-2"/> <b>Special Price</b> Get extra 17% off (price inclusive of cashback/coupon) <span className="text-primary" role="button">T&C</span></p>
                    </div>
                    <button className="btn main-btn mt-2">Add to cart</button>
                    <div className="mt-3 pb-3">
                        <h5>Description</h5>
                        <p className="fs-6">{products.description}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
