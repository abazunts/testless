import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {translate} from "react-i18next";
import Button from "../../elements/Button/button";
import {compose} from "redux";
import injectSheet from "react-jss";
import Field from '../../elements/field'
import {authMe, login} from "../../redux/loginReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";

const styles = {
    loginContainer: {
        background: 'white',
        padding: '30px',
        boxShadow: "1px 1px 6px 1px #c5c5c5",
    },
    buttonSubmit: {
        marginTop: '20px',
        textAlign: "center"
    }
};

const Login = (props) => {
    const {classes, isAuth} = props;
    return <div className={classes.loginContainer}>
        {isAuth && <Redirect to={'/'}/>}
        <LoginForm {...props} />
    </div>
};

const LoginContainer = (props) => {

    const onSubmit = (values) => {
        props.login(values)
    };
    return <Login {...props} onSubmit={onSubmit}/>
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth,
    }
};

export default compose(
    withRouter,
    translate("common"),
    injectSheet(styles),
    connect(mapStateToProps, {login, authMe})
)(LoginContainer);


const LoginSchema = Yup.object().shape({
    email: Yup.string().email()
        .required('login.emailRequired'),
    password: Yup.string()
        .required('login.passwordRequired'),
});

const LoginForm = (props) => {
    const {t, classes} = props;
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={values => {
                props.onSubmit(values)
            }}
        >
            {({errors, touched}) => (
                <Form className="js-submit-form js-support-form">
                    <div className="content-header b-b">
                        <h2 className="content-header__title">{t('login.authorization')}</h2>
                        <p className="text text-gray pt-xs">{t('login.authorizationHelloMessage')}</p>
                    </div>
                    <div className="content-pane">
                        <Field name="email"
                               title={t("login.email")}
                               errors={errors} touched={touched} t={t} i18n={props.i18n}/>
                        <Field name="password"
                               title={t("login.password")}
                               errors={errors} touched={touched} type={'password'} t={t} i18n={props.i18n}/>
                        <div className="modal-footer text-left b-t mt-lg">
                            <Button title={t("login.loginButton")}
                                    className="btn btn--brand btn--long btn--no-shadow js-services-modal-toggler"/>
                        </div>
                    </div>

                </Form>
            )}
        </Formik>
    )
};
