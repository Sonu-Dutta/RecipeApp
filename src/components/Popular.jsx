import React from "react";
import { useEffect, useState } from "react";
import "./Popular.css";
// import '@splidejs/react-splide/css/core';
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { Link } from "react-router-dom";
import girl from "../assests/girl.png"

import env from "react-dotenv";
import { type } from "@testing-library/user-event/dist/type";

export default function Popular() {
  const [Popular, setpopular] = useState([]);

  useEffect(() => {
    getResponse();
    // getpopular();
  }, []);

  // const getpopular = async () => {
  //   const res = await fetch(
  //     "https://api.spoonacular.com/recipes/random?apiKey=737e9f1e5c544232a55df8cb65629ff4&number=9"
  //   );
  // const data= await res.json();
  // console.log(process.env.REACT_API);

  //   console.log(res);
  // };

  const getResponse = async () => {
    const check = localStorage.getItem("Popular");
    // console.log(check);
    if (check) {
      setpopular(JSON.parse(check));
    } else {
      const Response = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=0b9fb42baf9a443d8ff016efc8ae93d0&number=9"
      );
      localStorage.setItem("Popular", JSON.stringify(Response.data.recipes));

      setpopular(Response.data.recipes);
      // console.log(Response);
      // console.log(Response.data.recipes);
      // console.log(process.env.REACT_API);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="heading">
        <img alt="girl" src={girl} className="pics"/>
        <div className="tit">Popular Picks</div>
        </div>
        <Splide
          options={{
            perPage: 3,
            // arrows: true,
            pagination: false,
            drag: "free",
            gap: "1rem",
            breakpoints:{
              768:{
                perPage:2,
                gap:".7rem"
              },
              480:{
                perPage:1,
                gap:"0"
  
              }
            }
          }}
          className="agnipat"
        >
          {Popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="card ">
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt="Img" className="po-img" />
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
