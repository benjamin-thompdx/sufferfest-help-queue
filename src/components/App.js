import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App(){
  const date = "08/06/2020";
  const subject = "MPH doesn't seem to be reading correctly";
  const detail = "When performing my weekly workouts, the MPH reading seems to be way off and I'd like to see accurate stats for all my rides.";
  return (
    <React.Fragment>
      <Header />
      <TicketList />
    </React.Fragment>
  );
}

export default App;