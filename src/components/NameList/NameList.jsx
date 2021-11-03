import React from 'react';

const NameList = props => {
    return (
      <div>
          {props.listNames.map((listNames) => (
              <li>{listNames}</li>
          ))}
      </div>  
    );
}

export default NameList;