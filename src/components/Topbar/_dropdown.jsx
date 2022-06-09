import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"
import OutsideClickObserver from "../OutsideClickObserver";

export default function _dropdown(props) {
    const dropdownItems = props.items ? props.items.map(function(item,index){
        return (
            <li key={index}>
                <Link className="dropdown-item" to={item.link} >
                {item.label}
                </Link>
            </li>
        )
    }) : <></>;

    const [collapsed, setCollapsed] = useState(false);
  return (
    <OutsideClickObserver outsideClickHandler={function(clickedOutside, event){
      if(clickedOutside){
        setCollapsed(false);
      }
    }}>
    <li className={"nav-item dropdown".concat(( collapsed ? " show" : ""))} onClick={()=>{
        setCollapsed(!collapsed);
    }}>
    <a className={"nav-link dropdown-toggle".concat(( collapsed ? " show" : ""))} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      {props.children}
    </a>
    <ul className={"dropdown-menu".concat(( collapsed ? " show" : ""))} aria-labelledby="navbarDropdown">
      {dropdownItems}
    </ul>
  </li>
  </OutsideClickObserver>
  );
}
