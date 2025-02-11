import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
       <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="fw-semibold">Oops! Page Not Found</h2>
      <p className="text-muted">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn btn-primary mt-3">Go Back Home</Link>
    </div>
    </div>
  )
}
