import React, { Component } from 'react';
import Ticket from './Ticket';

//TODO: change to a functional component since it has no local state.

class TicketList extends Component {
    //Receives props from App.js 

    render() {
        const onCloseTicket = this.props.handleCloseTicket;

        //Take the ticketList and for each ticket object in the array, display the ticket (pass the respective ticket state info to each):
        const tickets = this.props.ticketList.map(function (value, index) {
            return (
                <li key={index} className="card card-outline-danger">
                    <Ticket
                        ticketInfo={value}
                        onCloseTicket={onCloseTicket}
                    />
                </li>
            )
        })

        return (
            <ul id="ticketsList">
                {tickets}
            </ul>
        )
    }
}

export default TicketList;