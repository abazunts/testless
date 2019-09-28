import React from "react";
import Button from "../../elements/Button/button";
import Select from "../../elements/field/Select";
import Field from '../../elements/field';
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
                    <div className={i18n.language === 'ar' && 'rtl'}>
                        <div>
                            <Select name='violationItems' title={t("inspections.violationItems")}
                                    value={violationItems} errors={errors} touched={touched}
                                    />
                        </div>
                        <div>
                            <Field name="violationCount"
                                   title={t("inspections.violationsCount")}
                                   errors={errors} touched={touched} type={'number'}
                            />
                        </div>
                    </div>
                    <div className="modal-footer text-right b-t mt-lg">
                        <Button onClick={props.onClick}
                                title={t("inspections.closeButton")}
                                className="btn btn--brand-outline btn--rect btn--long js-services-works-modal-close mr-lg btn--no-shadow"/>
                        <Button onClick={addViolation}
                                title={t("inspections.saveButton")}
                                className="btn btn--brand btn--long btn--no-shadow js-services-modal-toggler"/>
                    </div>
                </Form>)}
        </Formik>
    </div>

};


export default ViolationAdd