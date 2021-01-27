import React from "react";
import 'components/DayListItem.scss';
import classNames from 'classnames';

const DayListItem = (props) => {

  const formatSpots = (props) => {

    const pluralStr = 'spots remaining'
    const singularStr = 'spot remaining';

    if (props.spots === 0) {
      return `no ${pluralStr}`;
    } else if (props.spots === 1) {
      return `${props.spots} ${singularStr}`;
    } else {
      return `${props.spots} ${pluralStr}`;
    }

  };

  const liClass = classNames('li', {
    'day-list__item': true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  });

  return (

    <li 
      data-testid="day" 
      className={liClass} 
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props)}</h3>
    </li>

  );

};

export default DayListItem