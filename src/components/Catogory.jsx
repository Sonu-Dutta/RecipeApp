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
        className={activetab === "acti" ? "acti" : "Navlink"}
        onClick={() => {
          setactivetab("acti");
        }}
        to={"/cuisine/Italian"}
      >
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>

      <NavLink
        className={activetab === "acti1" ? "acti" : "Navlink"}
        onClick={() => {
          setactivetab("acti1");
        }}
        to={"/cuisine/American"}
      >
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink
        className={activetab === "acti2" ? "acti" : "Navlink"}
        onClick={() => {
          setactivetab("acti2");
        }}
        to={"/cuisine/Thai"}
      >
        <GiNoodles />

        <h4>Thai</h4>
      </NavLink>

      <NavLink
        className={activetab === "acti3" ? "acti" : "Navlink"}
        onClick={() => {
          setactivetab("acti3");
        }}
        to={"/cuisine/Japanese"}
      >
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </div>
  );
}
