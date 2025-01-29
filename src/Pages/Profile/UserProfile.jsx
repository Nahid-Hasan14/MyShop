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
                       <ul role= "button">
                        <li>My Profile</li>
                        <li>My Address</li>
                        <li>My Order</li>
                       </ul>
                    </div>
                  </div>
                  <div className="col-lg-9">
                  <div className="profileAddressBook">
                    <div className=" row address-title">
                      <div className="col-lg-8 col-8">
                        <h3>Address Book</h3>
                      </div>
                      <div className="col-lg-4 col-4 text-end profile-edit-btn">
                        <button className="btn btn-info">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="address-book mt-3">
                      <p>
                        <b>Full Name:</b> Md Nahid Hasan
                      </p>
                      <p>
                        <b>Mobile Number:</b> 01774641500
                      </p>
                      <p>
                        <b>Email:</b> nahidhsn14@gamil.com
                      </p>
                      <p>
                        <b>Division:</b> Rangpur
                      </p>
                      <p>
                        <b>District:</b> Kurigram
                      </p>
                      <p>
                        <b>UpoZila:</b> Nageswari
                      </p>
                      <p>
                        <b>Thana:</b> Kochakata
                      </p>
                      <p>
                        <b>Home:</b> Dholuabari
                      </p>
                    </div>
                    </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
