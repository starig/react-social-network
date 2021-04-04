import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <Field component={'input'} name={'login'} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <Field component={'input'} name={'password'}  type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <Field component={'checkbox'} name={'rememberMe'}  type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
        authAPI.login(formData.login, formData.password);
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;