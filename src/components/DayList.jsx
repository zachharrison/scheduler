import React from 'react';
import DayListItem from 'components/DayListItem';

const DayList = (props) => {
  const list = props.days.map((day) => {
    return (
      <DayListItem
        id={day.id}
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    );
  });

  return <ul>{list}</ul>;
};

export default DayList;
