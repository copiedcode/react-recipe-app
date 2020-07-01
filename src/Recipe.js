import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, dietLabels, link}) => {
    return (
        <div className={style.recipe}>
            <h2 className={style.heading}>{title}</h2>
            <div className={style.properties}>
                <div className={style.calories}>
                    {calories} kcal
                </div>
                <div>
                    {dietLabels.join(", ")}
                </div>
            </div>
            <h3>What you will need:</h3>
            <ul className="ingredients">
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ul>
            <img className={style.image} src={image} alt={title}></img>
            <a href={link} target="_blank" className={style.link}>Lets do it!</a>

        </div>
    );
}
 export default Recipe;