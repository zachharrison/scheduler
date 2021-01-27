import React, { useState } from 'react';

const useVisualMode = (initial, replace = false) => {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace) => {

    setHistory(prev => {

      const newHistory = [...prev];

      if (replace) {
        newHistory.pop();
      }

      newHistory.push(mode);
      return newHistory
    });

  };

  const back = () => {
    if (history.length < 2) return;


    setHistory(prev => {
      const newHistory = [...prev];
      newHistory.pop();
      return newHistory;
    });

  }
  
  /*
    CURRENT MODE IS ON THE TOP OF THE CALL STACK
    SO WE WANT TO RETURN THE LAST VALUE 
    FROM THE HISTORY ARRAY
  */
  return { mode: history.slice(-1)[0], transition, back};
};

export default useVisualMode
