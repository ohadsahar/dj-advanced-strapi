import React from 'react';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';
import { useRouter } from 'next/router';
const Layout = ({ title, keywords, description, children }) => {

    const router = useRouter();

    return (
        <div>
            <Head><title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            {router.pathname === '/' && < Showcase />}
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Dj events | Find the hottest Parties',
    description: 'Find the latest songs',
    keywords: 'Music,dj,edm,events'
}

export default Layout;
