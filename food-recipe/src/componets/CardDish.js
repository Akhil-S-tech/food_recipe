import React from 'react'

function CardDish(props) {

  return (
    <li>
      <a href="javscript:;" onClick={()=>props.showPopup(props.menuItem.strMeal)}>
    <img src={props.menuItem.strMealThumb} className="br-10" alt='' />
    <h5>{props.menuItem.strMeal}</h5>
    </a>
</li>
  )
}

export default CardDish