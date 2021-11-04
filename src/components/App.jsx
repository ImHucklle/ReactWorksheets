import React, { Component } from 'react';
import './App.css'
import DisplayName from './DisplayName/DisplayName';
import NameList from './NameList/NameList';
import AlertUser from './AlertUser/AlertUser';
import Table from './Superhero/Table';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "Myles", 
            lastName: "Lister",
            names: ['Baker', 'Nick', 'Jarvis', 'Myles'],
        };
    }

    alertUser = (props) => {
        this.alert('devCodeCamp')
    };

    render (){
        return(
            <div>
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
                <br />
                <NameList listNames={this.state.names} />
                <br />
                <AlertUser button/>
                <br />
                <Table />
            </div>
        );
    }
}

export default App;