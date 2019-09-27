import React from "react";
import Button from "../../elements/Button/button";
import Select from "../../elements/field/Select";
import Field from '../../elements/field';
import style from './css/style.module.css'
import {Form, Formik} from "formik";
import * as Yup from "yup";

const ViolationSchema = Yup.object().shape({
    violationItems: Yup.string()
        .required('errors.violationRequired'),
    violationCount: Yup.number()
        .required('errors.countRequired'),
});

const ViolationAdd = (props) => {
    const {t, i18n, violations, setViolations, violationItems} = props;

    const addViolation = (event) => {
        event.preventDefault();
        const violation = {title: event.currentTarget.form[0].value, count: event.currentTarget.form[1].value};
        const data = [...violations];
        data.push(violation);
        setViolations(data);
        props.onClick();
    };
    return <div>
        <Formik
            initialValues={{
                violationCount: '',
                violationItems: '',

            }}
            validationSchema={ViolationSchema}
            onSubmit={values => {
                addViolation(values)
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <div>
                        <div>
                            <Select name='violationItems' title={t("inspections.violationItems")}
                                    value={violationItems} errors={errors} touched={touched}
                                    t={t} i18n={i18n}/>
                        </div>
                        <div>
                            <Field name="violationCount"
                                   title={t("inspections.violationsCount")}
                                   errors={errors} touched={touched} type={'number'} i18n={i18n} t={t}
                            />
                        </div>
                    </div>
                    <div className={style.buttons}>
                        <div className={style.button}>
                            <Button onClick={addViolation} title={t("inspections.saveButton")} width={'60px'}/>
                        </div>
                        <div className={style.button}>
                            <Button onClick={props.onClick} title={t("inspections.closeButton")} width={'60px'}/>
                        </div>
                    </div>
                </Form>)}
        </Formik>
    </div>

};


export default ViolationAdd