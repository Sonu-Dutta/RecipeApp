import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Recipe.css";
export default function Recipe() {
  const [details, setdetails] = useState(" ");
  const [activetab, setactivetab] = useState("Instructions");
  const [ingre, setingre] = useState([]);

  const params = useParams();
  const fetchdetails = async () => {
    const data = await axios.get(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=0b9fb42baf9a443d8ff016efc8ae93d0`
    );
    setingre(data.data.extendedIngredients);

    setdetails(data.data);
  };

  useEffect(() => {
    fetchdetails();
  }, [params.name]);
  // console.log("hehe0", ingre);
  return (
    <>
      <div className="Detailwrapper">
        <div className="Recipe-left">
          <img src={details.image} alt="" className="Recipe-img" />
          <h3>{details.title}</h3>
        </div>

        <div className="Info">
          <div className="ll">
            <button
              className={activetab === "Instructions" ? "active" : "Button"}
              onClick={() => setactivetab("Instructions")}
            >
              {" "}
              Instructions{" "}
            </button>
            <button
              className={activetab === "Ingredients" ? "active" : "Button"}
              onClick={() => setactivetab("Ingredients")}
            >
              Ingredients
            </button>
          </div>

          {activetab === "Instructions" && (
            <div>
              <h4
                className="sum"
                dangerouslySetInnerHTML={{ __html: details.summary }}
              ></h4>
              {/* <h4
                className="sum"
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></h4> */} 
            </div>
          )}

          {activetab === "Ingredients" && (
            <ul>
              {ingre.map((hr) => {
                return <li> {hr.original}</li>;
              })}
            </ul>
          )}

          {/* <div>
        <h3 className="sum" dangerouslySetInnerHTML={{__html: details.summary}}  > </h3>
        <h3 className="sum" dangerouslySetInnerHTML={{__html: details.instructions}}  ></h3>
    </div> */}
        </div>

        {/* <ul>
       
      { (details.ingredients) ? (
        details.extendedIngredients.map((ingredients)=>
        <li key={ingredients.id}>{ingredients.original}</li>
      )) : (<> <h3>helkdjkdkd</h3></>)

      } 
      
    </ul> */}
      </div>
    </>
  );
}
