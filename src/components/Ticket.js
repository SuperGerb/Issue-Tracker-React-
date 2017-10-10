import React, { Component } from 'react';

class Ticket extends React.Component {
    
        render() { 
          return (
            <li class="card card-outline-danger">
                <div class="card-block">
                    <form id="issueForm" name="issueForm">
                        <p class="issue-number">Issue ID: {this.props.issueId}</p>
                        <button type="button" id="status" class="btn btn-sm btn-info button-status" id>open</button>
                        <h2>{this.props.issue}</h2>
                        <p class="issue-text issue-text-first"><i class="fa fa-clock-o" aria-hidden="true"></i>{this.props.severity}</p>
                        <p class="issue-text"><i class="fa fa-user-circle-o" aria-hidden="true"></i>{this.props.assignedTo}</p>
                        <button type="button" id="close" class="btn btn-sm btn-warning issue-action-buttons" id>Close</button>
                        <button type="button" id="delete" class="btn btn-sm btn-danger issue-action-buttons">Delete</button>
                    </form>
                </div>
            </li>    
          )
        }
  };
  
  export default Ticket;