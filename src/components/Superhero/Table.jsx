import React, { Component } from 'react';

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            superheroes: ['Wolverine', 'Deadpool', 'Professor X', 'Magneto'],
        };
    }


    render (){
        return(
            <div>
                <table class = "table">
                    <tr>
                        <th>Name</th>
                    </tr>
                    <tr>
                        <td>{this.state.superheroes[0]}</td>
                    </tr>
                    <tr>
                        <td>{this.state.superheroes[1]}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Table;