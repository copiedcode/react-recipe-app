import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, dietLabels, link, servings}) => {
    return (
        <div className={style.recipe}>
            <div className={style.header}>
                <h2 className={style.heading}>{title}</h2>
                <div className={style.properties}>
                    <div className={style.calories}>
                        {calories} kcal
                    </div>
                    <div>
                        {dietLabels.length > 0 ? dietLabels.join(", ") : '---'}
                    </div>
                </div>
            </div>
            <div className="ingredients">
                <h3>What you will need:</h3>
                <ul >
                    {ingredients.map(ingredients => (
                        <li>{ingredients.text}</li>
                    ))}
                </ul>
                <p className={style.primary}>About {servings} servings.</p>
            </div>
            <img className={style.image} src={image} alt={title}></img>
            <a href={link} target="_blank" className={style.link}>Lets do it!</a>

        </div>
    );
}
 export default Recipe;