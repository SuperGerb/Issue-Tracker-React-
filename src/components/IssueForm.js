import React, { Component } from 'react';

class IssueForm extends Component {
    //1. Constructor in which initial state is declared:
    //Define the state locally, here, so as not to encumber App.js with information that it doesn't require:
    constructor(props) {
        super(props);
        this.state = {
            issueId: "",
            issue: "",
            severity: "",
            assignedTo: "",
            open: true,
            //Issue objects to be stored in an array:
            ticketList: []
        };
    }

    //2. Define handler functions for modifying the state:
    handleChangeInput = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    //Why is asynchronous programming not needed here?:
    handleSubmitNewIssue = (event) => {
        event.preventDefault();
        
        //Set the default level of severity to "low":
        var levelOfSeverity = this.state.severity !== "" ? this.state.severity : "low";
        
        var currentTicket = {
            issueId: this.state.issueId,
            //TODO: need to generate issueId
            //issueId: chance.guid(), //Doesn't work
            issue: this.state.issue,
            severity: levelOfSeverity,
            assignedTo: this.state.assignedTo,
            open: this.state.open
        };
        //Push the ticket onto the ticketList array
        //(I tried with concat instead of push because concat will make a shallow copy of it before modifying it but it didn't work)
        this.state.ticketList.push(currentTicket);

        //Save the ticketList in state:
        this.setState({
            ticketList: this.state.ticketList,
            //Clear the Issue form inputs:
            issueId: "",
            issue: "",
            severity: "",
            assignedTo: ""
        });

        //Check if this.props has an onNewIssue event listener. If it does, call it with my state value in order to pass ticketList to App.js. (From there it will be passed as props to TicketList.js):
        if(this.props.onNewIssue){
            console.log(this.state.ticketList);
            this.props.onNewIssue(this.state.ticketList);
        }
    }

    //3. Render the UI:
    //Access state in the render method using this.state
    render() {
        return (
            <div className="card card-main">
                <div className="card-block">
                    <h2>Add a New Issue</h2>
                    <form id="addIssue" name="addIssue">
                        <label htmlFor="issue">Issue</label>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="fa fa-github" aria-hidden="true"></i></span>
                            <input type="text" value={this.state.issue} className="form-control" id="issue" name="issue" placeholder="Describe the Issue..." aria-describedby="basic-addon1" onChange={this.handleChangeInput} />
                        </div>
                        <br />
                        <label htmlFor="severity">Severity:</label>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                            <select id="severity" value={this.state.severity ? this.state.severity : 'low'} name="severity" onChange={this.handleChangeInput} >
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <br />
                        <label htmlFor="assignedTo">Assigned to:</label>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="fa fa-user-circle-o" aria-hidden="true"></i></span>
                            <input type="text" value={this.state.assignedTo} className="form-control" id="assignedTo" name="assignedTo" placeholder="Enter Person Responsible For" aria-describedby="basic-addon1" onChange={this.handleChangeInput} />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" id="trackIssue" onClick={this.handleSubmitNewIssue}>Track Issue</button>
                    </form>
                </div>
            </div>
        )
    }
};

export default IssueForm;


//Notes on previous techniques
//Since components should only update their own state, App will pass callbacks to IssueForm that will fire whenever the state should be updated. We can use the onChange event on the inputs to be notified of it. The callbacks passed by App call setState(), and the app will be updated.

//Binding calling the callback, onChangeInput, with the passed arguments value and name; and binding handleChangeInput to the App's handleChangeInput

/*
handleChangeInput = (event) => {
    //No longer needed, as state is being saved locally here and passed to App.js on submit
    this.props.onChangeInput(event.target.value, event.target.name);
}*/