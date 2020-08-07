import React from 'react';
import Ticket from './Ticket';

function TicketList(){
  return (
    <Ticket 
      date="08/06/2020"
      subject="MPH doesn't seem to be reading correctly"
      detail="When performing my weekly workouts, the MPH reading seems to be way off and I'd like to see accurate stats for all my rides."
    />
  );
}

export default TicketList;