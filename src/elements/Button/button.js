import React from 'react';
import injectSheet from "react-jss";

let styles = {
    button: {
        cursor: 'pointer',
        background: props => !props.background ? '#00a19b' : props.background,
        border: props => !props.background ? 'none' : '1px solid #00a19b',
        borderRadius: '25px',
        color: props => !props.color ? 'white' : '#00a19b',
        padding: '10px',
        width: props => !props.width ? '150px' : props.width,
        boxShadow: props => !props.background ? '1px 3px 5px -1px  #009A94' : 'none',

    }
};

const Button = props => {
    const {classes} = props;
    return <div className={classes.buttonWrapper}>
        <button className={classes.button} onClick={props.onClick} {...props.width}>
            <span>{props.title}</span>
        </button>
    </div>

};

export default injectSheet(styles)(Button)