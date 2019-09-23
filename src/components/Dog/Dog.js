import React from 'react';
import './Dog.css';

const Shiba = ({apperance}) => {
    return <img className="Dog" src={apperance} alt="dog" />
};

export default Shiba;