import React from 'react';
import PropTypes from 'prop-types';

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

Ticket.propTypes = {
  date: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  detail: PropTypes.string
};

export default Ticket;