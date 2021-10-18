import React from 'react';

const Slider = ({ href, title }) => (
    <div>
        <img width="100%" src={href} title={title} />
        <span>{title}</span>
    </div>
)

export default Slider
