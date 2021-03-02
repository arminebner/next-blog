import Image from 'next/image'
import styles from '../../../styles/SinglePost.module.css'

const SinglePost = ({ post }) => {
	return (
		<section className={styles.container}>
			<div className={styles.headerImage}>
				<Image
					src={post.headerImagePath}
					layout='fill'
					objectFit='cover'
					priority
				/>
			</div>
			<div className={styles.postText}>
				<h1>{post.title}</h1>
				<div className={styles.postMeta}>
					<p>{`from: ${post.author}`}</p>
					<p>{`published: ${new Date(post.createdAt)}`}</p>
					<p>
						{post.last_updated
							? `last updated: ${new Date(post.last_updated)}`
							: ''}
					</p>
				</div>
				<div
					className={styles.postContent}
					dangerouslySetInnerHTML={{
						__html: post.sanitizedHTML1,
					}}
				/>
				{post.image1 ? (
					<Image
						src={post.image1Path}
						layout='intrinsic'
						width={900}
						height={600}
					/>
				) : (
					''
				)}
				{post.sanitizedHTML2 ? (
					<div
						className={styles.postContent}
						dangerouslySetInnerHTML={{
							__html: post.sanitizedHTML2,
						}}
					/>
				) : (
					``
				)}
				{post.image2 ? (
					<Image
						src={post.image2Path}
						layout='intrinsic'
						width={900}
						height={600}
					/>
				) : (
					''
				)}

				{post.sanitizedHTML3 ? (
					<div
						className={styles.postContent}
						dangerouslySetInnerHTML={{
							__html: post.sanitizedHTML3,
						}}
					/>
				) : (
					``
				)}
				{post.image3 ? (
					<Image
						src={post.image3Path}
						layout='intrinsic'
						width={900}
						height={600}
					/>
				) : (
					''
				)}

				{post.sanitizedHTML4 ? (
					<div
						className={styles.postContent}
						dangerouslySetInnerHTML={{
							__html: post.sanitizedHTML4,
						}}
					/>
				) : (
					``
				)}
				{post.image4 ? (
					<Image
						src={post.image4Path}
						layout='intrinsic'
						width={900}
						height={600}
					/>
				) : (
					''
				)}

				{post.sanitizedHTML5 ? (
					<div
						className={styles.postContent}
						dangerouslySetInnerHTML={{
							__html: post.sanitizedHTML5,
						}}
					/>
				) : (
					``
				)}
			</div>
			{/* <Sharer
			title={post.title}
			short_description={post.short_description}
		/>
		{user ? (
			<>
				<button onClick={() => handleDelete(post._id)}>
					Delete
				</button>
				<Link to={`blog/edit-post/${post.slug}`}>Edit</Link>
			</>
		) : (
			''
		)} */}
		</section>
	)
}

export default SinglePost

export const getStaticProps = async context => {
	const res = await fetch(
		`https://content.arminebner.com/posts/${context.params.slug}`
	)
	const json = await res.json()
	const post = json.data[0]

	return {
		props: {
			post,
		},
	}
}

export const getStaticPaths = async () => {
	const res = await fetch(`https://content.arminebner.com/posts`)
	const json = await res.json()
	const posts = json.data

	const slugs = posts.map(post => post.slug)
	const paths = slugs.map(slug => ({ params: { slug: slug } }))

	return {
		paths,
		fallback: false,
	}
}
