import React from 'react';
import InterviewerListItem from 'components/InterviewerListItem'
import 'components/InterviewerList.scss';

export default function InterviewerList(props) {

  props.interviewers.map(interviewer => {

    // console.log(props)

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

            // console.log(props)
        
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

}

