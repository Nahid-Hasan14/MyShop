import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css"; // Optional: Custom styles

const AboutUs = () => {
  return (
    <div className="container-fluid about-us mt-5 py-2">
      {/* Video Section */}
      <div className="video-container text-center mt-3">
        <iframe
          className="w-100"
          height="500"
          src="https://www.youtube.com/embed/2Iybmqa4sH4?autoplay=1&mute=1"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ maxHeight: "500px", objectFit: "cover" }}
        ></iframe>
      </div>

      {/* Content Section */}
      <div className="container my-5">
        <h1 className="text-center text-black mb-4">About Us</h1>
        <p className="text-muted text-center">
          Welcome to our website! We are dedicated to delivering top-notch services
          and creating amazing experiences for our users.
        </p>

         {/* Mission Section */}
        <div className="my-5">
        <h2 className="text-center text-black mb-4">Our Mission</h2>
        <p className="text-center text-black">
          Our mission is to empower individuals and businesses through innovative solutions that enhance efficiency, creativity, and growth. We believe in building long-term relationships founded on trust, integrity, and collaboration.
        </p>
      </div>

      {/* Values Section */}
      <div className="my-5">
        <h2 className="text-center text-black mb-4">Our Values</h2>
        <div className="row text-center">
          <div className="col-md-4 text-black">
            <h5>Integrity</h5>
            <p>We uphold the highest standards of honesty and transparency in all our dealings.</p>
          </div>
          <div className="col-md-4 text-black">
            <h5>Innovation</h5>
            <p>We strive to stay ahead by adopting cutting-edge technologies and creative approaches.</p>
          </div>
          <div className="col-md-4 text-black">
            <h5>Excellence</h5>
            <p>We are committed to delivering the best results for our clients and partners.</p>
          </div>
        </div>
      </div>

        {/* Team Section */}
        <div className="row mt-5">
          <div className="col-md-4 text-center text-black">
            <img
              src="/path-to-image1.jpg"
              alt="Team Member 1"
              className="rounded-circle mb-3"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h5>Team Member 1</h5>
            <p className="text-muted">Position 1</p>
          </div>
          <div className="col-md-4 text-center text-black">
            <img
              src="/path-to-image2.jpg"
              alt="Team Member 2"
              className="rounded-circle mb-3"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h5>Team Member 2</h5>
            <p className="text-muted">Position 2</p>
          </div>
          <div className="col-md-4 text-center text-black">
            <img
              src="/path-to-image3.jpg"
              alt="Team Member 3"
              className="rounded-circle mb-3"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h5>Team Member 3</h5>
            <p className="text-muted">Position 3</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-5">
          <h2>Get in Touch</h2>
          <p className="text-muted">
            Have questions or want to work with us? Reach out via the contact details below.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
