import React from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { useState, useRef } from "react";
import Dropdown from "./_dropdown";
import logoDark from "../../app-logo-dark.svg"

const TOPICS = [
  {label: "Hooks", link: "topics/hooks"},
]

export default function Topbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logoDark} alt="site-logo" className="shadow p-2" style={{width: "50px", height: "50px", borderRadius:"50%", backgroundColor: "white"}}/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="blog">
                Blog
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="component">
                Components
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link disabled" aria-current="page" to="article">
                Article
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="mini">
                Minis
              </NavLink>
            </li> */}
              {/* <Dropdown items={TOPICS}>
                Topics
              </Dropdown> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link disabled" aria-current="page" to="/about" onClick={()=> window.location = "/about"}>
                About
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
