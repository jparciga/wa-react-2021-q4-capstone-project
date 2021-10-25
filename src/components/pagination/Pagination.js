import classNames from "classnames";
import styles from './Pagination.module.scss';



const Pagination = () => {
    return (
        <div className={classNames(styles.pagination)}>
            <div className={classNames(styles.paginationBtn)}> &#8249;</div>
            <span>1/1</span>
            <div className={classNames(styles.paginationBtn)}> &#8250;</div>
        </div>
    )
}

export default Pagination
