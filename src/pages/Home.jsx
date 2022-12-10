import Popular from "../components/Popular";
import Veggis from "../components/Veggis";


import React from "react";
import Attraction from "../components/Attraction";

export default function Home() {
  return (
    <div>
      <Attraction/>
      <Popular />
      
      <Veggis />
    </div>
  );
}
