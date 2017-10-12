import React, { Component } from 'react';

class PersonalisationField extends Component {

    handleChangeInput = (event) => {
        this.props.onChangeInput(event.target.value, event.target.name);
    }

    render() {
        return (
            <div>
                <i>PersonalisationField this tool by entering your name: </i>
                <input type="text" onChange={this.handleChangeInput} name="usersName" />
                <br />
                <br />
            </div>
        )
    }
}

export default PersonalisationField;