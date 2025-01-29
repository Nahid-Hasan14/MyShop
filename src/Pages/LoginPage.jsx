
const LoginPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card border border-primary p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center main-color mb-4">Login</h3>
        <form>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
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
        <p className='mt-4'>If are you not register. Please <span className='main-color fw-bold cursor-pointer'>Register</span></p>
      </div>
    </div>
  );
};

export default LoginPage;
