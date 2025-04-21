import { NavLink, Outlet } from "react-router-dom";
import "./UserProfile.css"
const UserProfile = () => {
  return (
    <div>
      <div className="container custom-profile">
        <div className="row">
                  <div className="col-lg-3">
                    <div className="profile text-center rounded">
                      <div className="profile-img text-center">
                        <img
                          className="custom-img"
                          src="./public/img/nahid.jpg"
                        />
                      </div>
                      <h4 className="profile-name py-3 mb-3">Md Nahid Hasan</h4>
                    </div>
                    <div className="manage-account p-2">
                       <h4>Manage My Account</h4>
                       <nav>
                       <ul role= "button">
                        <NavLink to="">My Profile</NavLink> <br/>
                        <NavLink to = 'my-address'>My Address</NavLink> <br />
                        <NavLink to= "order" >My Order</NavLink> <br />
                       </ul>
                       </nav>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <Outlet />
                  </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
