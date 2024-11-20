import logo from '../../media/Logo.svg';
import prev from '../../media/prev.svg';
import styles from './styles.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <a href="/" className={styles.btn_prev}>
                <img src={prev}  className="btn_prev_img" alt="prev" />
            </a>
            <img src={logo} className={styles.logo} alt="logo" />
            <div className={styles.title_page}> Profile </div>
        </div>
    )
}

export default Header