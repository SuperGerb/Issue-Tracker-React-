import React, { Component } from 'react';

//Example of a functional component:
//(Ie just a function (vs a class-based component)

const Header=(props)=>(
    <h1>{props.user}'s JS Issue Tracker</h1>
)

export default Header;