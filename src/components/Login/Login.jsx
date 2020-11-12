import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../common/FromsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        // хандл сабмит, чтоб не перезагружать форму при нажатии на клавишу
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input}
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input}
                       validate={[required, maxLength20]}/>
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
    form:'contact'
}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
    }
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    }


export default Login;