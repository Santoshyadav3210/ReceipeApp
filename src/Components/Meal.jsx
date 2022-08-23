import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./RecipeIndex";
import './Style.css'
const Meal = () => {
    const [show, setShow] = useState(false);
    const [item, setItem] = useState("");
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [search ,setSearch]=useState("")

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            setItem(data.meals);
            console.log(data)
            setShow(true);
        })
    }, [url])

    const setIndex = (alpha) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }

    const searchReceipe=(event)=>{

        if(event.key==="Enter"){
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }

    }
    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search Your Food Recipe</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" onChange={(e)=>{setSearch(e.target.value)}} onKeyPress={searchReceipe} />
                </div>
                <div className="indexContainer">
                    <ReacipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
                </div>
                <div className="container">
                    {
                        show ? <MealItem data={item} /> : "Not Found"

                    }
                </div>
              

            </div>
        </>
    )
}
export default Meal;