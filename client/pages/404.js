import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';
const NotFoundPage = () => {
    return (
        <Layout title="Page Not Found">
            <div className={styles.error}>
                <h1>404</h1>
                <h4>Sorry, there is nothing here</h4>
            </div>
        </Layout>
    )
}

export default NotFoundPage
