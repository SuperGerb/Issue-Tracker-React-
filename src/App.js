import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import Personalise from './components/Personalise';
import Header from './components/Header';
import IssueTracker from './components/IssueTracker';
import Ticket from './components/Ticket';

class App extends Component {
    //1. Constructor in which initial state is declared:
    constructor(props) {
        super(props); 
        this.state = {
            usersName: "Stephanie",
            issueId: "",
            issue: "",
            severity: "",
            assignedTo: ""
        };
    }

    //2. Define handler functions for modifying the state:
    handleChangeInput=(event, name)=>{
        var name = name;
        var value = event;
        this.setState({ [name]: event });
    };

    // generateIssueId=(event)=>{
    //     this.setState({issueId:chance.guid()});
    // }

    //3. Render the UI:
    //Access state in the render method using this.state
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="col-sm12">
                        
                        <Personalise 
                            onChangeInput={this.handleChangeInput} //A callback that will fire when the state is updated, ie onChangeInput
                        />
                        <Header usersName={this.state.usersName} />
                        <IssueTracker
                            usersName={this.state.usersName}
                            assignedTo={this.state.assignedTo}
                            issue={this.state.issue}
                            onChangeInput={this.handleChangeInput} //A callback that will fire when the state is updated, ie onChangeInput
                        />
                        <ul id="ticketsList" >
                            <Ticket
                                issueId={this.state.issueId}
                                issue={this.state.issue}
                                severity={this.state.severity}
                                assignedTo={this.state.assignedTo}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

//Notes: 
/* event handler for a single input (of name title):
handleChangeInput = (event) => {
    this.setState({title:event.target.value});
    console.log(event.target.value);
};
*/

/* To use the same change handler for all inputs:
(Works if the fields are in this component, which is no longer the case)
handleChangeInput = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value });
}*/
