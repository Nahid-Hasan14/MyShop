export default function MyAddress() {
  return (
    <div>
      <div className="profileAddressBook">
        <div className=" row address-title">
          <div className="col-lg-8 col-8">
            <h3>Address Book</h3>
          </div>
          <div className="col-lg-4 col-4 text-end profile-edit-btn">
            <button className="btn btn-info">Edit</button>
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
  );
}
