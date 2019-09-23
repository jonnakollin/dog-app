import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({title, color}) => {
    return <h1 className={color}>{title}</h1>
};

Title.defaultProps = {
    color: 'white',
}

Title.propTypes = {
    title: PropTypes.string,
    color: PropTypes.oneOf(['white','blue', 'red'])
}

export default Title