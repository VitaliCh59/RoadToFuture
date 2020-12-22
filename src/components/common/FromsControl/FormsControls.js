import React from "react";
import styles from "./FormControls.module.css"
import {Field} from "redux-form";

// все пропсы приходящие в текстареу мы отдаем конечному пользователю, т.е Текстэрии, которая где то вызывается
// Textarea =({input, meta - мы это достаем деструктуризацией (рест оператор),
// а все оставшееся оставим в пропсах, и будем прокилывать именно оставшееся
const FormControl = ({input, meta:{touched, error}, children, ...props}) => {
    const hasError = error && touched;
    return (
        <div className={styles.formControl + " " + ( hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            { hasError && <span> {error} </span>}
        </div>
    )//если ошибка есть, покажи спан
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /> </FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /> </FormControl>
}

export const createField = (placeholder, name, validators, component, props ={}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
            {...props}
            /> {text}
    </div>
)

/*export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + " " + ( hasError ? styles.error : "")}>
            <div>
            <textarea {...input} {...props} />
            </div>
            { hasError && <span> {meta.error} </span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + " " + ( hasError ? styles.error : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span> {meta.error} </span>}
        </div>*/
   /* )
}*/
