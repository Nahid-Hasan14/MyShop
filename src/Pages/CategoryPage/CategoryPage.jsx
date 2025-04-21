import { Link, useLocation } from "react-router-dom";
import "./CategoryPage.css"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Breadcrumbs from "../../Components/Breadcrumbs";

export default function CategoryPage() {
    const location = useLocation();
    const products = location.state?.data;

    if(!products){
       return <h3>No Data Found</h3>
    }

  return (
    <div>
      <div className='container-fluid category-container'>
           <div className='row'>
            <div className='col-md-3 d-none d-md-block'>
                <div className='category-section'>
                    <h4 className='border-bottom border-primary p-2'>Filter Category</h4>
                    <div className="">
                        <ul className="list-unstyled text-primary category-filter" role="button">
                            <li>For Men<MdOutlineKeyboardArrowRight /></li>
                            <li>For Women<MdOutlineKeyboardArrowRight /></li>
                            <li>For Kids<MdOutlineKeyboardArrowRight /></li>
                            <li>For Electronics<MdOutlineKeyboardArrowRight /></li>
                            <li>For Dress<MdOutlineKeyboardArrowRight /></li>
                            <li>For Home Deceretion<MdOutlineKeyboardArrowRight /></li>
                            <li>For Food Itms<MdOutlineKeyboardArrowRight /></li>
                            <li>For Fashion<MdOutlineKeyboardArrowRight /></li>
                            <li>For Books<MdOutlineKeyboardArrowRight /></li>
                            <li>For Cosmetics<MdOutlineKeyboardArrowRight /></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Discount</h4>
                        <ul className="list-unstyled text-primary category-filter" role="button">
                            <li>5% or more</li>
                            <li>10% or more</li>
                            <li>15% or more</li>
                            <li>20% or more</li>
                            <li>30% or more</li>
                            <li>40% or more</li>
                            <li>50% or more</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-md-9 col-12'>
                <div className="category-section">
                    <div className="page-reader">
                        <ul>
                        <Breadcrumbs />
                            {/* <li role="button">Home <MdOutlineKeyboardArrowRight /></li>
                            <li role="button">Category</li> */}
                        </ul>
                    </div>
                    <div className="py-2"><span><b>Category Name</b>  (Showing 1 - 40 products of 47,910 products)</span></div>
                    <div className="d-flex gap-3 border-bottom border-primary pb-2 sorting">
                    <span><b>Sort By</b></span>
                      <ul>
                       <li role="button">Price--Low to High</li>
                       <li role="button">Price--High to Low</li>
                      </ul>
                    </div>
                    <div className="row">
                        {
                            products.map(product =>(
                            <div key={product.id} className="col-md-3 col-6 product-card-section">
                            <div className="product-card">
                                <Link to={`/product-details/${product.id}`} state={{product}}><img src= {product.image}/></Link>
                                <Link to={`/product-details/${product.id}`} state={{product}}><p className="product-title-style pt-2">{product.title.substring(0, 50)}...</p></Link>
                                <p className="text-body-tertiary">{product.category}</p>
                                <div className="d-flex gap-3">
                                  <p><del>$79</del></p>
                                  <p><b>${product.price}</b></p>
                                  <p className="text-success">10% OFF</p>
                                </div>
                                <p className="text-success">Buy 2 items, save extra ₹20</p>
                            </div>
                        </div>
                            ))
                        }
                        {/* <div className="col-md-3 col-6 product-card-section">
                            <div className="product-card">
                                <img src="./img/dron1.jpg"/>
                                <p className="product-title-style pt-2">Wild Stone Edge Perfume Eau de Parfum Eau de Parfum - </p>
                                <p className="text-body-tertiary">For Men & Women</p>
                                <div className="d-flex gap-3">
                                  <p><del>$79</del></p>
                                  <p><b>$75</b></p>
                                  <p className="text-success">10% OFF</p>
                                </div>
                                <p className="text-success">Buy 2 items, save extra ₹20</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 product-card-section">
                            <div className="product-card">
                                <img src="./img/dron1.jpg"/>
                                <p className="product-title-style pt-2">Wild Stone Edge Perfume Eau de Parfum Eau de Parfum - </p>
                                <p className="text-body-tertiary">For Men & Women</p>
                                <div className="d-flex gap-3">
                                  <p><del>$79</del></p>
                                  <p><b>$75</b></p>
                                  <p className="text-success">10% OFF</p>
                                </div>
                                <p className="text-success">Buy 2 items, save extra ₹20</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 product-card-section">
                            <div className="product-card">
                                <img src="./img/dron1.jpg"/>
                                <p className="product-title-style pt-2">Wild Stone Edge Perfume Eau de Parfum Eau de Parfum - </p>
                                <p className="text-body-tertiary">For Men & Women</p>
                                <div className="d-flex gap-3">
                                  <p><del>$79</del></p>
                                  <p><b>$75</b></p>
                                  <p className="text-success">10% OFF</p>
                                </div>
                                <p className="text-success">Buy 2 items, save extra ₹20</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 product-card-section">
                            <div className="product-card">
                                <img src="./img/dron1.jpg"/>
                                <p className="product-title-style pt-2">Wild Stone Edge Perfume Eau de Parfum Eau de Parfum - </p>
                                <p className="text-body-tertiary">For Men & Women</p>
                                <div className="d-flex gap-3">
                                  <p><del>$79</del></p>
                                  <p><b>$75</b></p>
                                  <p className="text-success">10% OFF</p>
                                </div>
                                <p className="text-success">Buy 2 items, save extra ₹20</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 product-card-section">
                            <div className="product-card">
                                <img src="./img/dron1.jpg"/>
                                <p className="product-title-style pt-2">Wild Stone Edge Perfume Eau de Parfum Eau de Parfum - </p>
                                <p className="text-body-tertiary">For Men & Women</p>
                                <div className="d-flex gap-3">
                                  <p><del>$79</del></p>
                                  <p><b>$75</b></p>
                                  <p className="text-success">10% OFF</p>
                                </div>
                                <p className="text-success">Buy 2 items, save extra ₹20</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 product-card-section">
                            <div className="product-card">
                                <img src="./img/dron1.jpg"/>
                                <p className="product-title-style pt-2">Wild Stone Edge Perfume Eau de Parfum Eau de Parfum - </p>
                                <p className="text-body-tertiary">For Men & Women</p>
                                <div className="d-flex gap-3">
                                  <p><del>$79</del></p>
                                  <p><b>$75</b></p>
                                  <p className="text-success">10% OFF</p>
                                </div>
                                <p className="text-success">Buy 2 items, save extra ₹20</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
           </div>
      </div>
    </div>
  )
}
