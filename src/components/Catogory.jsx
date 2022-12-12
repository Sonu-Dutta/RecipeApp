import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "./Catogory.css";
import { useState } from "react";

export default function Catogory() {
  const [activetab, setactivetab] = useState("Navlink");

  return (
    <div className="List">
      <NavLink
        className={activetab === "acti" ? "types" : "Navlink"}
        onClick={() => {
          setactivetab("acti");
        }}
        to={"/cuisine/Italian"}
      >
        <FaPizzaSlice  className={activetab === "acti" ? "types" : "Navlink"}/>
        <h4>Italian</h4>
      </NavLink>

      <NavLink
        className={activetab === "acti1" ? "types" : "Navlink"}
        onClick={() => {
          setactivetab("acti1");
        }}
        to={"/cuisine/American"}
      >
        <FaHamburger  className={activetab === "acti1" ? "types" : "Navlink"}/>
        <h4>American</h4>
      </NavLink>
      <NavLink
        className={activetab === "acti2" ? "types" : "Navlink"}
        onClick={() => {
          setactivetab("acti2");
        }}
        to={"/cuisine/Thai"}
      >
        <GiNoodles  className={activetab === "acti2" ? "types" : "Navlink"}/>

        <h4>Thai</h4>
      </NavLink>

      <NavLink
        className={activetab === "acti3" ? "types" : "Navlink"}
        onClick={() => {
          setactivetab("acti3");
        }}
        to={"/cuisine/Japanese"}
      >
        <GiChopsticks  className={activetab === "acti3" ? "types" : "Navlink"}/>
        <h4>Japanese</h4>
      </NavLink>
    </div>
  );
}
