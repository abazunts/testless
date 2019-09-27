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
    const {classes, value, title, name, t, visibleButtonAdd, i18n, ref} = props;
    return <div className={classes.row}>
        <div className={classes.title}>
            {title}
        </div>
        <div className={classes.select}>
            <Field component="select" name={name} className={classes.field} dir={i18n.language === 'ar' && 'rtl'} ref={ref}>
                {value.map(n => <option key={n.value} value={n.value}>{n.value}</option>)}
            </Field>
            {visibleButtonAdd &&
            <div className={classes.button} >
                <Button title={t("inspections.add")} background={'#0065a1'} width={'50px'}/>
            </div>}
        </div>
    </div>
};

export default injectSheet(styles)(Select);