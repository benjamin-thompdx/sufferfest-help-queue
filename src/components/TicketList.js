import React from 'react';
import Ticket from './Ticket';

function TicketList(){
  return (
    <React.Fragment>
      <Ticket 
        date="08/01/2020"
        subject="MPH doesn't seem to be reading correctly"
        detail="When performing my weekly workouts, the MPH reading seems to be way off and I'd like to see accurate stats for all my rides."
      />
      <Ticket
        date="08/06/2020"
        subject="My password doesn't work"
        detail="I keep getting an error when typing my password in on the login page."
      />
    </React.Fragment>
  );
}

export default TicketList;