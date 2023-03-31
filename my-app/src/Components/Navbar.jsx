import { BellIcon, EmailIcon, Search2Icon } from "@chakra-ui/icons";
import { Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import Beautsio from "./Images/Beautsio.png"
import "./Navbar.css"
const Navbar = () => {
  
  return (
    <>
      <div id="nav1">
        <a href="#">
         <span ><strong>Score 50% off</strong>†† your favorite brands. <strong>Shop Now</strong>▸| Free shipping† on all orders. †Terms apply.</span>
        </a>
        </div>
      <div id="nav2">
        <div>
          <div id="logo">
            <Link to="/">
              <img  src={Beautsio} alt="Logo" />
            </Link>
          </div>
          <input type="text" name="" id="" placeholder="🔍 Search" />
          <div className="dropdown">
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3443/3443338.png"
                alt=""
              />
            </span>
            <p>
              Stores & Services <br />
              <span className="nav2-sub-section">Pick a Store</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
