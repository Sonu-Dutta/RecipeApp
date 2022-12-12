import React from "react";
import { useEffect, useState } from "react";
import "./Popular.css";
// import '@splidejs/react-splide/css/core';
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { Link } from "react-router-dom";
import dish from "../assests/logoo.png"

export default function Veggis() {
  const [Veggis, setVeggis] = useState([]);

  useEffect(() => {
    getResponse();
    // getVeggis();
  }, []);

  const getResponse = async () => {
    const check = localStorage.getItem("Veggis");
    if (check) {
      setVeggis(JSON.parse(check));
    } else {
      const Response = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=0b9fb42baf9a443d8ff016efc8ae93d0&number=9&tags=vegan"
      );
      localStorage.setItem("Veggis", JSON.stringify(Response.data.recipes));

      setVeggis(Response.data.recipes);
      console.log(Response);
      console.log(Response.data.recipes);
      // console.log(process.env.REACT_API);
    }
  };

  return (
    <div>
      <div className="wrapper ">
      <div className="heading">
        <img alt="girl" src={dish} className="pics"/>
        <div className="tit">Picks for the day</div>
</div>
        <Splide className="agnipat "
          options={{
            perPage: 3,
            // arrows: true,
            pagination: false,
            drag: "free",
            gap: "1rem",
            breakpoints:{
              768:{
                perPage:2,
                gap:".7rem",
                width:"96%"
              },
              480:{
                perPage:1,
                gap:"0",
                // width:"100%"
  
              }
            }
          }}
        >
          {Veggis.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="card">
                  {/* <div className="Gradient"> */}
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt="Img"  className="po-img"/>
                  </Link>

                  {/* </div> */}
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
