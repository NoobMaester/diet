import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image}) => {
    return (
        <div className={style.recipe}>
            <h2>{title}</h2>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} style={{margin: '10px'}} />
        </div>
    )
}

export default Recipe
