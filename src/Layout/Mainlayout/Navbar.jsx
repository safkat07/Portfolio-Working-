import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
    <div className="flex gap-3">
    <NavLink to='/'> <li>Home</li> </NavLink>
    <NavLink to='/about'> <li>About</li> </NavLink>
    <NavLink to='/projects'> <li>Projects</li> </NavLink>
    <NavLink to='/contacts'> <li>Contacts</li> </NavLink>
    </div>
      

      
    </>
  );

  return (
    <div className="navbar md:px-5 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to='/' className=" text-xl font-semibold font-mono">Safkat.dev</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu  menu-horizontal px-1  font-semibold">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
