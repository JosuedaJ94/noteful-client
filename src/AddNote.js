import React, { Component } from 'react';
import AppContext from './AppContext';

export default class AddNote extends Component {


    static contextType = AppContext

    state = {
        error: null
    }

    onAddNote = event => {
        event.preventDefault();
        const note = {
            name: event.target.name.value,
            content: event.target.content.value,
            folderId: event.target.folderId.value
        }

        
        fetch('http://localhost:9090/notes', {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(note)
        })
            .then(res => {
                
                if(!res.ok){
                    throw new Error("Failed to Fetch")
                }
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
            <form onSubmit={this.onAddNote}>
                <div>
                    {this.state.error}
                </div>
                <label for="name">Name: </label>
                <input name="name" required />
                <label for="content">Content: </label>
                <input name="content" required/>
                <label for="folderId">Folder: </label>
                <select name="folderId">
                    {this.context.folders.map(folder => <option value={folder.id}>{folder.name}</option>)}
                </select>
                <button type="submit">Add Note</button>
            </form>
        )
    }


}