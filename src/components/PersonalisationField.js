import React, { Component } from 'react';

class PersonalisationField extends Component {

    handleChangeInput = (event) => {
        this.props.onChangeInput(event.target.value, event.target.name);
    }

    render() {
        return (
            <div>
                <i>Personalise this tool by entering your name: </i>
                <input type="text" onChange={this.handleChangeInput} name="user" />
                <br />
                <br />
            </div>
        )
    }
}

export default PersonalisationField;