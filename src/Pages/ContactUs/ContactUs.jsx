import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container mt-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Contact Us</h2>
              <p className="text-center text-muted mb-4">
                Have questions or need assistance? Fill out the form below, and we’ll get back to you as soon as possible.
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder="Enter the subject"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </div>
              </form>
              <div className="mt-4">
                <h5 className="text-center">Other Ways to Reach Us</h5>
                <ul className="list-unstyled text-center">
                  <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
                  <li>Phone: <a href="tel:+1234567890">+1 234 567 890</a></li>
                  <li>Address: 123 Main Street, City, Country</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;