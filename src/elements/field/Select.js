import React from 'react';
import {Field} from 'formik';
import './style.css';
import injectSheet from "react-jss";
import Button from "../Button/button";

const styles = {
    row: {
        marginTop: "30px",
        marginBottom: "5px",
    },

    title: {
        color: "#676767",
        fontSize: "16px",
        fontWeight: "600",
        paddingBottom: "6px",
        textAlign: 'left'
    },

    field: {
        width: "100%",
        height: "41px",
        borderRadius: "5px",
        border: "1px solid #e4e8ee",
        backgroundColor: "#ffffff",
        outline: "none",
        padding: "10px 15px",
        boxSizing: "border-box",
        color: "#3f4751",
        fontSize: "16px",
        fontWeight: "500",
    },

    fieldError: {
        marginTop: "5px",
        color: "#da2626",
    },

    select: {
        display: 'flex'
    },
    button: {
        marginLeft: '5px'
    }
};

const Select = (props) => {
    const {classes, value, title, name} = props;
    return <div className="form-group support__form-group">
        <p className="form-group__label"> {title}</p>
        <div className={classes.select}>
            <Field component="select" name={name} className="input js-input input--blue input--rect">
                {value.map(n => <option key={n.value} value={n.value}>{n.value}</option>)}
            </Field>
        </div>
    </div>
};

export default injectSheet(styles)(Select);