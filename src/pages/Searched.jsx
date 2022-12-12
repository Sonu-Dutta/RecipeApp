import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../pages/Cuisine.css";
import { Link } from "react-router-dom";

export default function Searched() {
  let params = useParams();

  const [SearchedRecipies, setSearchedRecipies] = useState([]);

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=b7905d553121402897b650a65594f1cc&query=${name}`
    );
    const ex = await data.json();

    setSearchedRecipies(ex.results);
  };

  useEffect(() => {
    getSearched(params.search);
    // console.log(params.search);
  }, [params.search]);

  return (
    <>
      <div className="Grid">
        {SearchedRecipies?.map((item) => {
          return (
            <div className="card-cu" key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt=" pic missing" />
                <h4 className="title-link">{item.title}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
