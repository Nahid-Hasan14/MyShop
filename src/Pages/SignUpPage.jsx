const SignUpPage = () => {
  return (
    <section className='pt-5'>
        <div className="container d-flex justify-content-center align-items-center custom-margin mt-5 pt-4">
      <div className="card border border-primary p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center main-color mb-4">Sign Up</h3>
        <form>
          {/* Full Name Input */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your Full Name"
              required
            />
          </div>
          {/* Phnoon Input */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
             Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your Full Name"
              required
            />
          </div>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control "
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
             Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              placeholder="Enter your confirm password"
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          {/* <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label htmlFor="rememberMe" className="form-check-label">
              Remember me
            </label>
          </div> */}

          {/* Login Button */}
          <div className="d-grid">
            <button type="submit" className="btn main-btn">
              Login
            </button>
          </div>
        </form>
        <p className='mt-4'>If are you not register. Please <span role="button" className='main-color black-hovr fw-bold'>Register</span></p>
      </div>
    </div>
    </section>
  )
}

export default SignUpPage
