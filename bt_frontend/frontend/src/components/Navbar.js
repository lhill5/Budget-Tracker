import "../styles/Navbar.css";
import { ReactComponent as PlusIcon } from "../icons/plus.svg";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as ProfileIcon } from "../icons/profile.svg";

import React, { useState, useEffect, useRef } from "react";

function Navbar(props) {
  const [NewTXNOpen, setNewTXNOpen] = useState(false); // when '+' icon is hovered
  const [TXNDropdownOpen, setTXNDropdownOpen] = useState(false); // when '+' dropdown is hovered

  return (
    <Navbar_main>
      <NavItem icon={<PlusIcon />} setNewTXNOpen={setNewTXNOpen}>
        {(NewTXNOpen || TXNDropdownOpen) && (
          <DropdownMenu
            setTXNDropdownOpen={setTXNDropdownOpen}
            closeTXNPopup={props.closeTXNPopup}
          ></DropdownMenu>
        )}
      </NavItem>

      <NavItem icon={<ProfileIcon />} />
    </Navbar_main>
  );
}

function Navbar_main(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
        onMouseOver={() => props.setNewTXNOpen(true)}
        onMouseOut={() => props.setNewTXNOpen(false)}
      >
        {props.icon}
      </a>

      {props.children}
    </li>
  );
}

function DropdownMenu(menu_props) {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={props.closePopup}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div
      className="dropdown"
      onMouseOver={() => menu_props.setTXNDropdownOpen(true)}
      onMouseOut={() => menu_props.setTXNDropdownOpen(false)}
    >
      <div className="menu">
        <DropdownItem leftIcon={<PlusIcon />}>New Account</DropdownItem>
        <DropdownItem
          leftIcon={<PlusIcon />}
          closePopup={menu_props.closeTXNPopup}
        >
          New Transaction
        </DropdownItem>
      </div>
    </div>
  );
}

export default Navbar;
