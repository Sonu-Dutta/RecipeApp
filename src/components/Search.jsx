import React from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [input, setinput] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="Search-in">
          <FaSearch className="Search-icon"></FaSearch>
          <input
            type="text"
            placeholder="Search for a recipe"
            value={input}
            onChange={(e) => {
              setinput(e.target.value);
            }}
          />
        </div>
      </form>
    </>
  );
}
