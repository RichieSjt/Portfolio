import React from 'react'
import * as styles from '../styles/sections/404.module.scss'

import Layout from '../components/UI/Layout'
import Seo from '../components/Utils/Seo'
import Button from '../components/UI/Button'

const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found" description="Page not found." lang="en" />
        <section className={styles.notFoundSection}>
            <h1 className={styles.title}>Not Found</h1>
            <p className={styles.lead}>
                Looks like the page you were searching for doesn&#39;t exist...
                the sadness.
            </p>
            <Button link="/" large={true}>
                Back to main page
            </Button>
        </section>
    </Layout>
)

export default NotFoundPage
