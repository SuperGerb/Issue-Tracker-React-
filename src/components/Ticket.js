import React, { Component } from 'react';

//TODO: change to a functional component since it has no local state.

class Ticket extends Component {
    //Receives props from TicketList

    //Closing a ticket means updating the "open" property of its state, which is stored in IssueForm. So do I send the particular ticket's issueID up through a callback chain (Ticket to its parent, TicketList; to its parent, App) and then down from App to IssueForm?

    //The top level component has the list of all issues, so it will need to be notified, so to updates its own internal list. In doing so this will impact the properties of the form, since it receives its base values from its partent.


    handleClickToCloseTicket=(event)=>{
        event.preventDefault();
        var ticketId = event.target.parentNode.getElementsByTagName('h2')[0].firstChild.nodeValue;
         //Going to be using, to get issueId (once issueIds are generated): event.target.parentNode.firstChild.firstChild.nodeValue

        if(this.props.onCloseTicket){
            this.props.onCloseTicket(ticketId);
        }
    }

    render() {
        const { ticketInfo } = this.props;
        //Equivalent to const ticketInfo = this.props.ticketInfo;
        const { issueId, issue, severity, assignedTo } = ticketInfo;
        console.log("ticket is ", ticketInfo);

        return (
            <div className="card-block">
                <form id="IssueForm" name="IssueForm">
                    <p className="issue-number">Issue ID: {issueId}</p>
                    <button type="button" id="status" className="btn btn-sm btn-info button-status">open</button>
                    <h2>{issue}</h2>
                    <p className="issue-text issue-text-first"><i className="fa fa-clock-o" aria-hidden="true"></i>{severity}</p>
                    <p className="issue-text"><i className="fa fa-user-circle-o" aria-hidden="true"></i>{assignedTo}</p>
                    <button type="button" id="close" className="btn btn-sm btn-warning issue-action-buttons" onClick={this.handleClickToCloseTicket}>Close</button>
                    <button type="button" id="delete" className="btn btn-sm btn-danger issue-action-buttons">Delete</button>
                </form>
            </div>
        )
    }
};

export default Ticket;