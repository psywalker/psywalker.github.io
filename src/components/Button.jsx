import React from 'react';
import ReactDOM from 'react-dom';

const Buttons = (props) =>
    <div className="buttons">
        <button className="button button__left" onClick={() => { props.onClick("left")}}>←</button>
        <button className="button button__right" onClick={() => { props.onClick("right")}}>→</button>
    </div>

export default Buttons;
