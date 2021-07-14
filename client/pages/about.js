import Link from 'next/link'
import React from 'react'
import Layout from '@/components/Layout';

const about = () => {
    return (
        <Layout title='About Dj Events'>
            <h1>About</h1>
            <p>This is app for finding the best music with the best dj׳s</p>
            <p>Version 1.0.0</p>
            <Link href="/">Home</Link>
        </Layout>
    )
}

export default about
