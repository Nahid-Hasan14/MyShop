import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb">
        {/* হোম লিঙ্ক */}
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>

        {pathnames.map((value, index) => {
          // ইউআরএল তৈরি করা
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          // ব্রেডক্রাম্ব আইটেম তৈরি
          return (
            <li
              key={to}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? (
                // লাস্ট আইটেম সাধারণ টেক্সট হবে
                decodeURIComponent(value)
              ) : (
                // আগের সব আইটেম লিংক হবে
                <Link to={to}>{decodeURIComponent(value)}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
