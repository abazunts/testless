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
        width: '50vh',
        padding: '30px',
        textAlign: 'center',
        boxShadow: "1px 1px 6px 1px #c5c5c5",
    },
    buttonSubmit: {
        marginTop: '20px',
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
                <Form>
                    <div>
                        <Field name="email"
                               title={t("login.email")}
                               errors={errors} touched={touched} t={t} i18n={props.i18n}/>
                    </div>
                    <div>
                        <Field name="password"
                               title={t("login.password")}
                               errors={errors} touched={touched} type={'password'} t={t} i18n={props.i18n}/>
                    </div>
                    <div className={classes.buttonSubmit}>
                        <Button title={t("login.loginButton")}/>
                    </div>
                </Form>
            )}
        </Formik>
    )
};
