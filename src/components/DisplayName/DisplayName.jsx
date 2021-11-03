import React from 'react';

const DisplayName = (props) => {
    return (
        <div>
            <h1 className="name">First Name:{props.name.firstName}Last Name:{props.name.lastName} </h1>
        </div>
    );
}

export default DisplayName;