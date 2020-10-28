import React from 'react';
import './../styles.scss';

const ColoredLine = ({ color }) => (
    <hr className="coloredLine" style={{
            color: color,
            backgroundColor: color,
            borderColor: color,
        }}
    />
)
export default ColoredLine;