import React from 'react';
import Ticket from './Ticket';

const masterTisketList = [
  {
    date: "08/01/2020",
    subject: "MPH doesn't seem to be reading correctly",
    detail: "When performing my weekly workouts, the MPH reading seems to be way off and I'd like to see accurate stats for all my rides."
  },
  {
    date: "08/06/2020",
    subject: "My password doesn't work",
    detail: "I keep getting an error when typing my password in on the login page."
  },
  {
    date: "08/07/2020",
    subject: "All is working as expected",
    detail: "No help needed, I just wanted to say thank you for offering such a great product."
  }
];

function TicketList(){
  return (
    <React.Fragment>
     <hr/>
     {masterTisketList.map((ticket, index) =>
      <Ticket
        date={ticket.date}
        subject={ticket.subject}
        detail={ticket.detail}
        key={index}
      />
     )}
    </React.Fragment>
  );
}

export default TicketList;