import React from "react";
import s from "./ProfileInfo.module.css";
import {Form, reduxForm, stopSubmit} from "redux-form";
import {createField, Input, Textarea} from "../../common/FromsControl/FormsControls"
import style from "../../common/FromsControl/FormControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <Form onSubmit={handleSubmit}>
        {<div>
            <button>save</button>
        </div>}
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>

        <div>
            <b>My professional
                skills</b>: {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        }
        <div>
            <b>About me</b>: {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b> {key}: {createField(key, "contacts." + key, [], Input)} </b>
            </div>
        })}
        </div>
    </Form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
