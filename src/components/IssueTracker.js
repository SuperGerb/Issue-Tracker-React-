import React, { Component } from 'react';

class IssueTracker extends React.Component {

    //Since components should only update their own state, App will pass callbacks to IssueTracker that will fire whenever the state should be updated. We can use the onChange event on the inputs to be notified of it. The callbacks passed by App call setState(), and the app will be updated.

    //Binding calling the callback, onChangeInput, with the passed arguments value and name; and binding handleChangeInput to the App's handleChangeInput
    handleChangeInput=(event)=>{
        this.props.onChangeInput(event.target.value, event.target.name);
    } 

    render() {
        return (
            <div className="card card-main">
                <div className="card-block">
                    <h2>Add a New Issue</h2>
                    <form id="addIssue" name="addIssue">
                        <label htmlFor="issue">Issue</label>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="fa fa-github" aria-hidden="true"></i></span>
                            <input type="text" className="form-control" id="issue" name="issue" placeholder="Describe the Issue..." aria-describedby="basic-addon1" onChange={this.handleChangeInput} />
                        </div>
                        <br />
                        <label htmlFor="severity">Severity:</label>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1" ><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                            <select id="severity" name="severity" onChange={this.handleChangeInput} >
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <br />
                        <label htmlFor="assignedTo">Assigned to:</label>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="fa fa-user-circle-o" aria-hidden="true"></i></span>
                            <input type="text" className="form-control" id="assignedTo" name="assignedTo" placeholder="Enter Person Responsible For" aria-describedby="basic-addon1" onChange={this.handleChangeInput} />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" id="trackIssue" onClick={this.createTicket}>Track Issue</button>
                    </form>
                </div>
            </div>
        )
    }
};

export default IssueTracker;