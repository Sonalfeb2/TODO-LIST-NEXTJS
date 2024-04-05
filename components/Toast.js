import styles from '../styles/toast.module.css'
const Toast = (props) =>{
    return (
        <div className={styles.snackbar}>{props.message}..</div>
    )
}
export default Toast