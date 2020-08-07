import React from 'react';

function Ticket(props){
  return (
    <React.Fragment>
      <h3>{props.date}</h3>
      <h3>{props.subject}</h3>
      <p><em>{props.detail}</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Ticket;