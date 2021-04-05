import React from 'react';
import styles from './FormsControls.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div>
            <input className={`${styles.formControl} ${hasError ? styles.error : null}`} {...input} {...props} />
            {hasError &&
            <div className={`alert alert-danger ${styles.alertContainer}`} role="alert">
                {meta.error}
            </div>}
        </div>
    )
}
