import React from 'react';
import InterviewerListItem from 'components/InterviewerListItem'
import 'components/InterviewerList.scss';
import PropTypes from 'prop-types';

const InterviewerList = (props) => {

  props.interviewers.map(interviewer => {

    return <InterviewerListItem
      key={interviewer.id}
      avatar={interviewer.avatar}
      name={interviewer.name}
      selected={interviewer.id === props.value}
      setInterviewer={(event) => props.onChange(interviewer.id)}
    />

  });

  return (

    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {
          props.interviewers.map(interviewer => {
        
            return <InterviewerListItem
              key={interviewer.id}
              avatar={interviewer.avatar}
              name={interviewer.name}
              selected={interviewer.id === props.value}
              setInterviewer={(event) => props.onChange(interviewer.id)}
            />
        
          })
        }
      </ul>
    </section>

  );

};

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList