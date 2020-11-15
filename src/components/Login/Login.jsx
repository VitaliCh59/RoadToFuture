import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FromsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        // хандл сабмит, чтоб не перезагружать форму при нажатии на клавишу
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input}
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input}
                       validate={[required, maxLength20]} type={"password"}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )}

    // оборачиваем контейнерной компонентой нашу компоненту (хок)
const LoginReduxForm = reduxForm({
    form:'login'
}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login (formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to = {"/profile"} />
    }

        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    }

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login} ) (Login);