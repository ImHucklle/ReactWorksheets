import React, { Component } from 'react';
import './App.css'
import DisplayName from './DisplayName/DisplayName';
import NameList from './NameList/NameList';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "Myles", 
            lastName: "Lister",
            names: ['Baker', 'Nick', 'Jarvis', 'Myles'],
        };
    }

    render (){
        return(
            <div>
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
                <NameList listName={this.state.names} />
            </div>
        );
    }
}

export default App;