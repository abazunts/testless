import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {translate} from "react-i18next";
import Button from "../../elements/Button/button";
import injectSheet from "react-jss";
import Field from '../../elements/field'
import Select from "../../elements/field/Select";
import ModalSignature from "../Signature/ModalSignature";
import {Field as FieldFormik} from 'formik';
import ModalViolation from "../Modal/ModalViolation";

const styles = {
    wrapperForm: {
        background: 'white',
        // paddingLeft: '50px',
        // paddingRight: '50px',
        boxShadow: "1px 1px 6px 1px #c5c5c5",
        marginBottom: '80px'
    },

    title: {
        color: "#676767",
        fontSize: "16px",
        fontWeight: "600",
        paddingBottom: "6px",
        textAlign: 'left'
    },

    button: {
        textAlign: 'left',
        margin: '10px'
    },

    signature: {
        maxHeight: '50px',
        maxWidth: '100px',
    },

    field: {
        textAlign: 'left'
    },

    buttonSubmit: {
        display: "flex",
        justifyContent: 'center'
    },

    buttonWrapper: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    violations: {
        marginBottom: '10px',
        color: '#00a19b'
    }


};


const NewInspection = (props) => {
    const {classes} = props;
    return <NewInspectionForm {...props} />
};

export default translate("common")(injectSheet(styles)(NewInspection));

const InspectionFormSchema = Yup.object().shape({
    violation: Yup.string()
        .required('errors.isRequired'),
    inspectionType: Yup.string()
        .required('errors.isRequired'),
    complain: Yup.string()
        .required('errors.isRequired'),
    shopName: Yup.string()
        .required('errors.isRequired'),

});

const NewInspectionForm = (props) => {
    const {
        t, classes, nationality, violationItems, i18n,
        startTime, cancel, useStateData, shopLocation, inspectorName
    } = props;
    const {
        signature, setSignature, violations, setViolations,
        inspectorSignature, setInspectorSignature
    } = useStateData;
debugger

    return (
        <Formik
            initialValues={{
                startTime: startTime,
                violation: '',
                inspectionType: '',
                complain: '',
                shopName: '',
                shopLocation: shopLocation,
                ownerName: '',
                ownerPhone: '',
                ownerId: '',
                licenseNumber: '',
                licenseDate: '',
                inspectionDate: '',
                inspectionTime: '',
                employeeName: '',
                employeeId: '',
                nationality: '',
                violationItems: '',
                notes: '',
                shopPersonName: '',
                shopPersonNationality: '',
                shopPersonId: '',
                inspectionEndTime: '',
                attachments: ''
            }}
            validationSchema={InspectionFormSchema}
            onSubmit={values => {
                props.onSubmit(values)
            }}
        >
            {({errors, touched}) => (
                <section className="content support">
                    <Form className="js-submit-form js-support-form">
                        <div className="content-header b-b">
                            <h2 className="content-header__title">{t('inspections.newInspection')}</h2>
                            <p className="text text-gray pt-xs">{t('inspections.newInspectionTitleMessage')}</p>
                        </div>
                        <div className="content-pane">
                            <div>
                                <Field name="startTime"
                                       title={t("inspections.startTime")}
                                       errors={errors} touched={touched} type={'datetime'} disabled/>
                            </div>
                            <div className="form-group support__form-group ">
                                <p className="form-group__label">{t("inspections.violation")}</p>
                                <FieldFormik className="radio" type="radio"
                                             name="violation" value="Yes"
                                             title={t("inspections.no")}/>
                                <label className="label header-actions__lang">{t("inspections.yes")}</label>

                                <FieldFormik className="radio" type="radio"
                                             name="violation" value="No"/>
                                <label className="label header-actions__lang">{t("inspections.no")}</label>
                            </div>
                            <div className="form-group support__form-group ">
                                <p className="form-group__label">{t("inspections.inspectionType")}</p>
                                <FieldFormik className="radio" type="radio" name="inspectionType" value="Visit"/>
                                <label className="label header-actions__lang">{t("inspections.visit")}</label>

                                <FieldFormik className="radio" type="radio" name="inspectionType" value="Report"/>
                                <label className="label header-actions__lang">{t("inspections.report")}</label>

                                <FieldFormik className="radio" type="radio" name="inspectionType" value="Complain"/>
                                <label className="label header-actions__lang">{t("inspections.complainType")}</label>
                            </div>
                            <div>
                                <Field name="complain"
                                       title={t("inspections.complain")}
                                       errors={errors} touched={touched} i18n={i18n} t={t}/>
                            </div>
                            <div>
                                <Field name="shopName"
                                       title={t("inspections.shopName")}
                                       errors={errors} touched={touched} i18n={i18n} t={t}/>
                            </div>
                            <div>
                                <Field name="shopLocation"
                                       title={t("inspections.shopLocation")}
                                       errors={errors} i18n={i18n} t={t} value={shopLocation}/>
                            </div>
                            <div>
                                <Field name="ownerName"
                                       title={t("inspections.ownerName")}
                                       errors={errors} touched={touched} i18n={i18n} t={t}/>
                            </div>
                            <div>
                                <Field name="ownerPhone"
                                       title={t("inspections.ownerPhone")}
                                       errors={errors} touched={touched} i18n={i18n} t={t}/>
                            </div>
                            <div>
                                <Field name="ownerId"
                                       title={t("inspections.ownerId")}
                                       errors={errors} touched={touched} i18n={i18n} t={t}/>
                            </div>
                            <div>
                                <Field name="licenseNumber"
                                       title={t("inspections.licenseNumber")}
                                       errors={errors} touched={touched} i18n={i18n} t={t}/>
                            </div>
                            <div>
                                <Field name="licenseDate"
                                       title={t("inspections.licenseDate")}
                                       errors={errors} touched={touched} type={'date'} i18n={i18n} t={t}/>
                            </div>
                            <div>
                                <Field name="inspectionDate"
                                       title={t("inspections.inspectionDate")}
                                       errors={errors} touched={touched} type={'date'} i18n={i18n} t={t}/>
                            </div>
                            <div>
                                <Field name="inspectionTime"
                                       title={t("inspections.inspectionTime")}
                                       errors={errors} touched={touched} type={'time'} i18n={i18n} t={t}/>
                            </div>
                            <div>
                                <Field name="employeeName"
                                       title={t("inspections.employeeName")}
                                       errors={errors} touched={touched} i18n={i18n} t={t}/>
                            </div>
                            <div>
                                <Field name="employeeId"
                                       title={t("inspections.employeeId")}
                                       errors={errors} touched={touched} i18n={i18n} t={t}/>
                            </div>
                            <div>
                                <Select name='nationality' title={t("inspections.nationality")}
                                        value={nationality} t={t} i18n={i18n}/>

                            </div>
                            <div>
                                <div className="form-group support__form-group">
                                    <p className="form-group__label">{t("inspections.violations")}</p>
                                    <div className={classes.violations}>
                                        {violations.map(v => <div>{v.title} : {v.count} </div>)}
                                    </div>
                                    <ModalViolation t={t} errors={errors} touched={touched} i18n={i18n}
                                                    violations={violations} setViolations={setViolations}
                                                    violationItems={violationItems}/>
                                </div>
                            </div>
                            <div>
                                <Field name="notes"
                                       title={t("inspections.notes")}
                                       errors={errors} touched={touched} i18n={i18n} t={t}/>
                            </div>
                            <div>
                                <Field name="shopPersonName"
                                       title={t("inspections.shopPersonName")}
                                       errors={errors} touched={touched} i18n={i18n} t={t}/>
                            </div>
                            <div className="form-group support__form-group">
                                <p className="form-group__label"> {t("inspections.signature")}</p>
                                <div>
                                    {signature
                                        ? <img className={classes.signature}
                                               src={signature}/>
                                        : null}
                                </div>
                                <ModalSignature setDataURL={setSignature} t={t}/>
                            </div>
                            <div>
                                <Select name='shopPersonNationality' title={t("inspections.shopPersonNationality")}
                                        value={nationality} t={t} visibleButtonAdd={false} i18n={i18n}/>

                            </div>
                            <div>
                                <Field name="shopPersonId"
                                       title={t("inspections.shopPersonId")}
                                       errors={errors} touched={touched} i18n={i18n} t={t}/>
                            </div>
                            <div className="form-group support__form-group">
                                <p className="form-group__label"> {t("inspections.inspectionSignature")}</p>
                                <div>
                                    {inspectorSignature
                                        ? <img className={classes.signature}
                                               src={inspectorSignature}/>
                                        : null}
                                </div>
                                <ModalSignature setDataURL={setInspectorSignature} t={t}/>
                            </div>
                            <div>
                                <Field type='file' name="attachments" errors={errors} touched={touched} i18n={i18n}
                                       t={t}/>
                            </div>
                            <div className="modal-footer text-right b-t mt-lg">
                                <Button title={t("inspections.cancel")} onClick={cancel}
                                        className="btn btn--brand-outline btn--rect btn--long js-services-works-modal-close mr-lg btn--no-shadow"/>
                                <Button title={t("inspections.withOutSubmit")}
                                        className="btn btn--brand-outline btn--rect btn--long js-services-works-modal-close mr-lg btn--no-shadow"/>
                                <Button title={t("inspections.submitButton")}
                                        className="btn btn--brand btn--long btn--no-shadow js-services-modal-toggler"/>
                            </div>
                        </div>
                    </Form>
                </section>
            )}
        </Formik>
    )
};
