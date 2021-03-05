import { NextSeo } from 'next-seo'
import { client } from '../client'
import Posts from '../components/Posts'
import styles from '../styles/Blog.module.css'

const Blog = ({ posts }) => {
	const seo = {
		title: 'Blog',
		description:
			'An Overview of my Blog-Posts about my Experience learning Web-Development and Linux',
		openGraph: {
			url: 'https://www.arminebner.com/blog',
			title: 'blog',
			description:
				'An Overview of my Blog-Posts about my Experience learning Web-Development and Linux',
		},
	}

	return (
		<>
			<NextSeo {...seo} />
			<div className={styles.container}>
				<div className={styles.welcomeText}>
					<h1>Welcome to my Blog</h1>
					<p>Here is the place to read about my favorite topics:</p>
					<p>
						Web-Development, Linux and Tech-related topics in
						general
					</p>
					<p>
						Have fun and feel free to get in touch if you have any
						questions
					</p>
				</div>
				<Posts posts={posts} />
			</div>
		</>
	)
}

export default Blog

export const getStaticProps = async () => {
	try {
		const res = await client.getEntries({
			order: 'sys.createdAt',
		})

		const posts = res.items

		return {
			props: {
				posts,
			},
		}
	} catch (e) {
		console.log(e)
	}
}

// export const getStaticProps = async () => {
// 	const res = await fetch('https://content.arminebner.com/posts')
// 	const json = await res.json()
// 	const posts = json.data

// 	return {
// 		props: {
// 			posts,
// 		},
// 	}
// }
