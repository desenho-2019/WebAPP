import React from 'react';

import { content, image, textStyle } from './style.js';

const button = ({ onClick, icon, type, text, backColor}) => (
    <button style={content, {backgroundColor: backColor}} type={type} onClick={onClick}>
            {icon ? <img style={image} src={icon} /> : null}
        <a style={textStyle}>{text}</a>
    </button>
)

// var Button = React.createFactory((button));

export default button;