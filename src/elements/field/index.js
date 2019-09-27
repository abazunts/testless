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

    titleRtl: {
        color: "#676767",
        fontSize: "16px",
        fontWeight: "600",
        paddingBottom: "6px",
        textAlign: 'right'
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

    display: {
        display: 'flex',
        flexDirection: 'column'
    },

    button: {
        marginLeft: '5px'
    }
};

const FieldWrapper = (props) => {
    const {classes, show, t, i18n} = props;
    return <div className={classes.row}>
        <div className={i18n.language === 'en' ? classes.title : classes.titleRtl}>
            {props.title}
        </div>
        <div className={classes.display}>
            <Field className={classes.field} {...props} dir={i18n.language === 'ar' && 'rtl'}>
                {props.children}
            </Field>
            {props.errors[props.name] && props.touched[props.name] ? (
                <div className={classes.fieldError}>
                    {props.t(props.errors[props.name])}
                </div>
            ) : null}
            {show &&
            <div className={classes.button}>
                <Button title={"+"} background={'#0065a1'} width={'50px'} onClick={props.getPosition}/>
            </div>}
        </div>
    </div>
};

export default injectSheet(styles)(FieldWrapper);