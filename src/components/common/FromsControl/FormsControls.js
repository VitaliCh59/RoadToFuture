import React from "react";
import styles from "./FormControls.module.css"

// все пропсы приходящие в текстареу мы отдаем конечному пользователю, т.е Текстэрии, которая где то вызывается
// Textarea =({input, meta - мы это достаем деструктуризацией (рест оператор),
// а все оставшееся оставим в пропсах, и будем прокилывать именно оставшееся
export const Element = Element=> ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + " " + ( hasError ? styles.error : "")}>
            <div>
                <Element {...input} {...props} />
            </div>
            { hasError && <span> {meta.error} </span>}
        </div>
    )//если ошибка есть, покажи спан
}

export const Textarea = Element("textarea");
export const Input = Element("input")


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
