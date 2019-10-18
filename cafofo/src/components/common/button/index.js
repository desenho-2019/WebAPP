import React from 'react';

const button = ({ color, onPress, icon, textColor }) => (
    <button >
    {icon ? <img src={icon} /> : null}
    </button>
)

var Button = React.createFactory((button));

export default button;