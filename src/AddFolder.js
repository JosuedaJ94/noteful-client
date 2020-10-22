import { render } from 'enzyme';
import React, { Component } from 'react';
import AppContext from './AppContext';


export default class AddFolder extends Component {

    static contextType = AppContext
    state = {
        error: null
    }

    onAddFolder = event => {
        event.preventDefault();
        const folder = {
            name: event.target.folderName.value
        }


        fetch('http://localhost:9090/folders', {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(folder)
        })
            .then(res => {
                this.context.getData()
                this.props.history.push("/")
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
                console.log(error)
            })


    }

    render() {
        return (
            <form onSubmit={this.onAddFolder}>
                <input name="folderName" required />
                <button type="submit">Add Folder</button>
                <div>
                    {this.state.error}
                </div>
            </form>
        )
    }
}