import React from 'react'
import './Style.css'
import {useNavigate} from 'react-router-dom'

function MealItem({ data }) {

    let navigate=useNavigate();

    console.log(data)
    return (
        <>
            {
                (!data) ? "Not Found " : data.map(item => {
                    return (
                        <div className='card' key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
                            <img src={item.strMealThumb} alt='' />
                            <h3>{item.strMeal}</h3>
                        </div>
                    )
                })
            }

        </>
    )
}

export default MealItem