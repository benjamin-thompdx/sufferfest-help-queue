import React from 'react';
import Ticket from './Ticket';

const masterTisketList = [
  {
    date: "07/01/2020",
    subject: "What equipment do I need for Sufferfest?",
    detail: "Is a smart turbo trainer the best option for connecting to my bike?"
  },
  {
    date: "07/16/2020",
    subject: "Does Sufferfest work on Android?",
    detail: "I am an Android user and want to know if my phone is compatibale with SUfferfest."
  },
  {
    date: "07/27/2020",
    subject: "Half Monty",
    detail: "What's the difference between Half Monty and Full Frontal? When should I do one versus the other?"
  },
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