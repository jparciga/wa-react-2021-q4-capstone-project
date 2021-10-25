import classnames from 'classnames';
import styles from './Button.module.scss';

const Button = ({title,action,setList}) =>{

    const handleAction = _ =>{

        action('product');
        setList('');

        window.scrollTo({ top: 0 });
    }

    return (
        <button onClick={handleAction} className={classnames(styles.btn)}>{title}</button>
    )
}

export default Button;