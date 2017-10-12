import Ticket from './Ticket';
import React, { Component } from 'react';

//TODO: change to a functional component since it has no local state.

class TicketList extends Component {
    //Receives props from App.js 

    render() {
        const tickets = this.props.ticketList.map(function (ticket, index) {
            return (
                <li key={index} className="card card-outline-danger">
                    {/* Pass each ticket object as props to Ticket.js: */}
                    <Ticket ticket={ticket} />
                </li>
            )
        })


        return (
            <ul id="ticketsList">{tickets}</ul>
        )
    }
}

export default TicketList;