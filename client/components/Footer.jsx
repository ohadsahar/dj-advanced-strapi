import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>Copyright &copy; Dj Events 2021</p>
            <p>
                <Link href="/about">About this project</Link>
            </p>
        </div>
    )
}

export default Footer
