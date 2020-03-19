import React from 'react';

function Header() {
    return(
        <h2 style={headerStyle}>ToDo List</h2>
    )
}

const headerStyle = {
    color: 'blue',
    textAligin: 'center',
    fontFamily: 'monospace',
    marginBottom: '50px'
}

export default Header;