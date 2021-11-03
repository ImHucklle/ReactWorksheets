import React, { Component } from 'react';
import './App.css'
import DisplayName from './DisplayName/DisplayName';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "Myles", 
            lastName: "Lister"
        };
    }

    render (){
        return(
            <div>
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
            </div>
        );
    }
}

export default App;