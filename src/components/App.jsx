import React, { Component } from 'react';
import './App.css'
import DisplayName from './DisplayName/DisplayName';

class App extends Component {
    constructor(props){
        super(props)
        this.name = [
            {firstName: "Myles"}, 
            {lastName: "Lister"}
        ];
    }

    render (){
        return(
            <div>
                <h1><DisplayName /></h1>
            </div>
        );
    }
}

export default App;