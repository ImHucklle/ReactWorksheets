import React, { Component } from 'react';

class Create extends Component{
    state = {
        superhero: [],
        errors: {
            superhero: []
        }
    }

    handleChange = (event) => {
        let errors = this.state.errors;

        switch(event.target.name){
            case 'superhero':
                errors.superhero = event.target.value.length < 1 ? "Superhero name has to be more that one character": null;
                break;
            default:
                break;
        }
        this.setState({
            [event.target.name]: event.target.value,
            errors: errors
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert("Superhero: ${this.state.superhero}")
    }

    render (){
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <label>Superhero Name</label>
                    <input type="text" name="superhero" onChange={this.handleChange} value={this.state.superhero}/>
                </div>
                    {this.state.errors.superhero ? <p style= {{color:'red'}}>{this.state.errors.superhero}</p> : ''}
                <button type="submit">Add Superhero</button>
            </form>
        );
    }
}

export default Create;