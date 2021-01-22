import React, { useState } from 'react';
import Button from 'components/Button'
import InterviewerList from 'components/InterviewerList'

export default function Form(props) {
  const [name, setName] = useState("");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  console.log('props from the form =====>', props);

  const reset = () => {
    setName('');
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  const save = () => {
    props.onSave(name, interviewer)
  };

  return (

    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form 
          onSubmit={event => event.preventDefault()}
          autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer}/>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>Cancel</Button>
          <Button onClick={save} confirm>Save</Button>
        </section>
      </section>
    </main>

  );

}