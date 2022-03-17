import { Link } from "react-router-dom";

import * as React from "react";

function Header() {
  return (
    <>
      <ul>
        <li>
          <Link
            to={{
              pathname: "/",
              state: {
                name: "customName",
                category: "man-fashion",
              },
            }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/About/iphone2022">About</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
