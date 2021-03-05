import Layout from '../components/Layout'
import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import seo from '../next-seo.config'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo {...seo} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
