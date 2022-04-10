import "../styles/globals.scss";
// import "../styles/typography.scss";
import Layout from "../components/layouts/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
