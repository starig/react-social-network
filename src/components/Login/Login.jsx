import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import styles from './Login.module.css';
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <h2 className={styles.loginTitle}>Login</h2>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <Field component={Input}
                       validate={[required]}
                       name={'email'}
                       type="email"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <Field component={Input}
                       validate={[required]}
                       name={'password'}
                       type="password"
                       id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <Field component={Input} name={'rememberMe'}  type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});


export default connect(mapStateToProps, {login})(Login);