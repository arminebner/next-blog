import Image from 'next/image'
import { client } from '../../../client'
import ReactMarkdown from 'react-markdown'
import styles from '../../../styles/SinglePost.module.css'

const SinglePost = ({ post }) => {
	console.log(`post from props: ${Array.isArray(post.posts)}`)

	return (
		<section className={styles.container}>
			<div className={styles.headerImage}>
				<Image
					src={`https:${post.fields.headerImage.fields.file.url}`}
					layout='fill'
					objectFit='cover'
					priority
				/>
			</div>
			<div className={styles.postText}>
				<h1>{post.fields.title}</h1>
				<div className={styles.postMeta}>
					<p>{`from: ${post.fields.author}`}</p>
					<p>{`published: ${new Date(post.sys.createdAt)}`}</p>
					<p>
						{post.last_updated
							? `last updated: ${new Date(post.sys.updatedAt)}`
							: ''}
					</p>
				</div>
				<div
					className={styles.postContent}
					dangerouslySetInnerHTML={{
						__html: post.fields.markdown1,
					}}
				/>
				{post.fields.image1 ? (
					<Image
						src={`https:${post.fields.image1.fields.file.url}`}
						layout='intrinsic'
						width={900}
						height={600}
					/>
				) : (
					''
				)}
				{post.fields.markdown2 ? (
					<div
						className={styles.postContent}
						dangerouslySetInnerHTML={{
							__html: post.fields.markdown2,
						}}
					/>
				) : (
					``
				)}
				{post.fields.image2 ? (
					<Image
						src={`https:${post.fields.image2.fields.file.url}`}
						layout='intrinsic'
						width={900}
						height={600}
					/>
				) : (
					''
				)}

				{post.fields.markdown3 ? (
					<div
						className={styles.postContent}
						dangerouslySetInnerHTML={{
							__html: post.fields.markdown3,
						}}
					/>
				) : (
					``
				)}
				{post.fields.image3 ? (
					<Image
						src={`https:${post.fields.image3.fields.file.url}`}
						layout='intrinsic'
						width={900}
						height={600}
					/>
				) : (
					''
				)}

				{post.fields.markdown4 ? (
					<div
						className={styles.postContent}
						dangerouslySetInnerHTML={{
							__html: post.fields.markdown4,
						}}
					/>
				) : (
					``
				)}
				{post.fields.image4 ? (
					<Image
						src={`https:${post.fields.image4.fields.file.url}`}
						layout='intrinsic'
						width={900}
						height={600}
					/>
				) : (
					''
				)}

				{post.fields.markdown5 ? (
					<div
						className={styles.postContent}
						dangerouslySetInnerHTML={{
							__html: post.fields.markdown5,
						}}
					/>
				) : (
					``
				)}
			</div>
		</section>
	)
}

export default SinglePost

export const getStaticProps = async context => {
	try {
		const res = await client.getEntries({
			content_type: 'post',
			'fields.slug': context.params.slug,
		})

		const post = res.items[0]
		console.log(`single-post: ${post}`)

		return {
			props: {
				post,
			},
		}
	} catch (e) {
		console.log(e)
	}
}

// export const getStaticProps = async context => {
// 	const res = await fetch(
// 		`https://content.arminebner.com/posts/${context.params.slug}`
// 	)
// 	const json = await res.json()
// 	const post = json.data[0]

// 	return {
// 		props: {
// 			post,
// 		},
// 	}
// }

export const getStaticPaths = async () => {
	try {
		const res = await client.getEntries()
		const posts = res.items

		const slugs = posts.map(post => post.fields.slug)
		const paths = slugs.map(slug => ({
			params: { slug: slug },
		}))

		return {
			paths,
			fallback: false,
		}
	} catch (e) {
		console.log(e)
	}
}
