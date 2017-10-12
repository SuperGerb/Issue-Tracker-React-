import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import PersonalisationField from './components/PersonalisationField';
import Header from './components/Header';
import IssueForm from './components/IssueForm';
import TicketList from './components/TicketList';

class App extends Component {
    //1. Constructor in which initial state is declared:
    constructor(props) {
        super(props);
        this.state = {
            usersName: "Stephanie",
            ticketList: []
        };
    }

    //2. Define handler functions for modifying the state:
    handleNewIssue = (ticketList) => {
        this.setState({
            ticketList: ticketList
        });
        console.log(this.state);
    }

    //Used currently with PersonalisationField component
    handleChangeInput = (event, name) => {
        this.setState({
            [name]: event
        });
    }

    //3. Render the UI:
    //Access state in the render method using this.state
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="col-sm12">
                        <PersonalisationField
                            onChangeInput={this.handleChangeInput} //A callback that will fire when the state is updated, ie onChangeInput
                        />
                        <Header usersName={this.state.usersName} />
                        <IssueForm
                            onNewIssue={this.handleNewIssue} //A callback that will fire on form submit
                        />
                        <TicketList ticketList={this.state.ticketList} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


//Notes on previous techniques: 
/* event handler for a single input (of name = title):
handleChangeInput = (event) => {
    this.setState({ title: event.target.value });
    console.log(event.target.value);
};
*/

/* To use the same change handler for all inputs:
(Works if the fields are in this component, which is no longer the case. Otherwise need to pass name in as a second parameter)
handleChangeInput = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({ [name]: value });
}*/