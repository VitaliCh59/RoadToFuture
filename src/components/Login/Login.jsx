import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FromsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../../components/common/FromsControl/FormControls.module.css"

const maxLength20 = maxLengthCreator(20)

const LoginForm = ({handleSubmit, error }) => {
    return (
        // хандл сабмит, чтоб не перезагружать форму при нажатии на клавишу
        <form onSubmit={handleSubmit}>
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
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )}

    // оборачиваем контейнерной компонентой нашу компоненту (хок)
const LoginReduxForm = reduxForm({
    form:'login'
}) (LoginForm)

const Login = ({login, isAuth }) => {
    const onSubmit = (formData) => {
        login (formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
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