import React from 'react';

import { content, image, textStyle } from './style.js';

const buttonAds = ({ onClick, icon, type, backColor}) => (
    <button style={content, {backgroundColor: backColor}} type={type} onClick={onClick}>
            {icon ? <img style={image} src={icon} /> : null}
    </button>
)

var ButtonAds = React.createFactory((buttonAds));

export default buttonAds;