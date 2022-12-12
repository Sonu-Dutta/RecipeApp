import React from "react";
// import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
// import axios from "axios";
import { useState, useEffect } from "react";
import "./Cuisine.css";

export default function Cuisine() {
  let params = useParams();

  const [cuisine, setCuisine] = useState([]);

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=b7905d553121402897b650a65594f1cc&cuisine=${name}`
    );
    const ex = await data.json();
    // console.log(ex);
    setCuisine(ex.results);
    // console.log("hello", data);
    // console.log("d",cuisine)
  };

  useEffect(() => {
    getCuisine(params.type);
    // console.log(params.type);
  }, [params.type]);

  return (
    <div className="Grid">
      {cuisine.map((item) => {
        return (
          <div className="card-cu" key={item.key}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="yo yo" className="ci-img" />
              <div className="kancha">{item.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
