import React from 'react';

function App(){
  const date = "08/06/2020";
  const subject = "MPH doesn't seem to be reading correctly";
  const detail = "When performing my weekly workouts, the MPH reading seems to be way off and I'd like to see accurate stats for all my rides.";
  return (
    <React.Fragment>
      <h1>Sufferfest Help Queue</h1>
      <h3>{date}</h3>
      <h3>{subject}</h3>
      <p><em>{detail}</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default App;