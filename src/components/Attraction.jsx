import React, { useState, useEffect } from 'react'
import "./Attraction.css";
import { Link } from 'react-router-dom';
import { SplideSlide,Splide } from '@splidejs/react-splide';

function Attraction() {
 
    const[Attract,setAttract]=useState([]);

    const getInfo =async ()=>{
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=0b9fb42baf9a443d8ff016efc8ae93d0&query=burger`
            // `https://api.spoonacular.com/food/menuItems/search?apiKey=737e9f1e5c544232a55df8cb65629ff4&query=burger&number=2`

        );
        const a=await data.json();
        setAttract(a.results);
    };

    useEffect(() => {
       getInfo();
       console.log("ddd",Attract);
    }, [])


  return (
    <div className='Attract'>
                <Splide
          options={{
            perPage: 1,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "0rem",
          }} className="space-taker"
        >

        {
            Attract.map((item)=>{
                return(
                    // <SplideSlide key={item.key} className="Attract-onetwo">
                    //     <Link to={"/recipe/" + item.id} className="att">
                                          
                    //          <img src={item.image} alt="Img" className='Attract-img'  />
                   
                    //         <div className="two">
                    //             <div className='in'>
                    //                 {/* 85% of our searchers will make this again!! */}
                    //                 {item.title}
                    //             </div>
                    //         </div> 
                    //      </Link>
                    
                    // </SplideSlide> 
                    <SplideSlide className='att-slide'>  
                          <div className='Att-img'><img src={item.image} alt="Img" className="att-img" /></div>
                          <div className='Att-txt'>{item.title}</div>
                          </SplideSlide>
                );
            }
            )
        }
        </Splide>
      
    </div>
  )
}

export default Attraction