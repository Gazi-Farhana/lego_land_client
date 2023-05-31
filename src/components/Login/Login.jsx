import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

import { FcGoogle } from "react-icons/fc";
import { useSetTitle } from "../../hooks/useSetTitle";

const Login = () => {
  useSetTitle("Login")
  const { singInUser, googleCreateUser } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    setError(null);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password is smaller than 6 characters");
      return;
    }

    singInUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const googleSignIn = () => {
    setError(null);
    googleCreateUser()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <p>
            Are you new here?
            <Link to="/register"> Register</Link>
          </p>
          <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Login" />
          </div>
        </form>

        <button className="btn btn-outline" onClick={googleSignIn}>
          Login with <FcGoogle />
        </button>

        {error && (
          <div className="flex gap-3 mb-4 justify-center">
            <p>
              <span className="text-red-600 font-semibold">Error: </span>{" "}
              {error}
            </p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Login;
