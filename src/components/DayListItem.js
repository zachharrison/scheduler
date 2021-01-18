import React from "react";
import 'components/DayListItem.scss';
import classNames from 'classnames';

export default function DayListItem(props) {

  const liClass = classNames('li', {
    'day-list__item': true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  });

  return (

    <li 
    className={liClass} 
    onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots}</h3>
    </li>

  );

}

/* 
  name:String the name of the day
  spots:Number the number of spots remaining
  selected:Boolean true or false declaring that this day is selected
  setDay:Function accepts the name of the day eg. "Monday", "Tuesday"


  day-list__item all the time
  day-list__item--selected class name if props.selected is true
  day-list__item--full class name if props.spots is 0.
*/