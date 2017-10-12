import React, { Component } from 'react';

//TODO: change to a functional component since it has no local state.

class Ticket extends Component {

    render() {
        const { ticket } = this.props;
        //Equivalent to const ticket = this.props.ticket;
        const { issueId, issue, severity, assignedTo } = ticket;
        console.log("Ticket is ", ticket);

        return (
            <div className="card-block">
                <form id="IssueForm" name="IssueForm">
                    <p className="issue-number">Issue ID: {issueId}</p>
                    <button type="button" id="status" className="btn btn-sm btn-info button-status">open</button>
                    <h2>{issue}</h2>
                    <p className="issue-text issue-text-first"><i className="fa fa-clock-o" aria-hidden="true"></i>{severity}</p>
                    <p className="issue-text"><i className="fa fa-user-circle-o" aria-hidden="true"></i>{assignedTo}</p>
                    <button type="button" id="close" className="btn btn-sm btn-warning issue-action-buttons">Close</button>
                    <button type="button" id="delete" className="btn btn-sm btn-danger issue-action-buttons">Delete</button>
                </form>
            </div>
        )
    }
};

export default Ticket;