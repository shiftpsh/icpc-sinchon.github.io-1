import styles from './Layout.module.css'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main} style={{ minHeight: '100vh' }}>{children}</main>
            <Footer />
        </>
    )
}
export default Layout