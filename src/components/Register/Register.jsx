import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";
import { useSetTitle } from "../../hooks/useSetTitle";

const Register = () => {
  useSetTitle("Register")
  const { createUser, updateProfileInfo, googleCreateUser } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const googleSignIn = () => {
    setError(null);
    googleCreateUser()
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleRegister = (event) => {
    setError(null);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const info = {
      displayName,
      photoURL,
    };

    if (password.length < 6) {
      setError("Password is smaller than 6 characters");
      return;
    }

    if (password !== confirm) {
      setError("Both the password and confirm password must match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfileInfo(info)
          .then()
          .catch((error) => setError(error.message));
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <dir className='grid grid-cols-2 gap-5'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Re-Write Your Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="confirm"
                  className="input input-bordered"
                  required
                />
              </div>
            </dir>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>

            <p>
              Already have an account?
              <Link to="/login"> Login</Link>
            </p>
            <div className="form-control mt-6">
              <input
                className="btn btn-outline"
                type="submit"
                value="Register"
              />
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

export default Register;
