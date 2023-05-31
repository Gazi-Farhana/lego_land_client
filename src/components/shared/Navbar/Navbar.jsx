import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-gradient-to-r from-yellow-600 to-green-600">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <div className="flex">
          <img className="w-12" src="assets/images/logo.jpeg" alt="" />
          <a className="normal-case ml-2 text-xl">Lego Land</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink className="btn btn-ghost" to="/">
            Home
          </NavLink>
          <NavLink className="btn btn-ghost" to="/allToys">
            All Toys
          </NavLink>
          {user?.email && (
            <>
              <NavLink className="btn btn-ghost" to="/myToys">
                My Toys
              </NavLink>
              <NavLink className="btn btn-ghost" to="/addAToy">
                Add A Toy
              </NavLink>
            </>
          )}
              <NavLink className="btn btn-ghost" to="/blogs">
                Blogs
              </NavLink>
        </ul>
      </div>
      <div className="navbar-end mr-10">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
              data-tip={user?.displayName || user?.email}
            >
              <div className="rounded-full ">
                {user?.photoURL ? <img src={user?.photoURL} /> : <CgProfile className="text-3xl text-center"/>}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={logOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn bg-stone-700 text-stone-400">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
