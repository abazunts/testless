import React from 'react';
import {Field} from 'formik';
import {translate} from "react-i18next";


const FieldWrapper = (props) => {
    const {t} = props;
    return <div className="form-group support__form-group">
        <p className="form-group__label">{props.title}</p>
            <Field type={props.type} className="input js-input input--blue input--rect" {...props}>
                {props.children}
            </Field>
            {props.errors[props.name] && props.touched[props.name]?
                <p className="form-group text-danger">{t(`errors.${props.name}`)}</p>
            : null}
    </div>
};

export default translate("common")(FieldWrapper);