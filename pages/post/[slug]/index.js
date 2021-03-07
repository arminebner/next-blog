import { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { client } from '../../../client'
import ReactMarkdown from 'react-markdown'
import Sharer from '../../../components/Sharer'
import styles from '../../../styles/SinglePost.module.css'

const SinglePost = ({ post }) => {
	const seo = {
		title: post.fields.title,
		description: post.fields.short,
		openGraph: {
			url: `https://www.arminebner.com/post/${post.fields.slug}`,
			title: post.fields.title,
			description: post.fields.short,
			images: [
				{
					url: post.fields.headerImage.fields.file.url,
					width: 800,
					height: 600,
					alt: 'Og Image Alt',
				},
			],
		},
	}

	const [showSharer, setShowSharer] = useState(false)

	useEffect(() => {
		setShowSharer(true)
	}, [])

	return (
		<>
			<NextSeo {...seo} />
			<section className={styles.container}>
				<div className={styles.headerImage}>
					<img
						src={`https:${post.fields.headerImage.fields.file.url}`}
					/>
				</div>
				<div className={styles.postText}>
					<h1>{post.fields.title}</h1>
					<div className={styles.postMeta}>
						<p>{`from: ${post.fields.author}`}</p>
						<p>{`published: ${new Date(post.sys.createdAt)}`}</p>
						<p>
							{post.last_updated &&
								`last updated: ${new Date(post.sys.updatedAt)}`}
						</p>
					</div>
					<div className={styles.postContent}>
						<ReactMarkdown>{post.fields.markdown1}</ReactMarkdown>
					</div>
					{post.fields.image1 && (
						<img
							src={`https:${post.fields.image1.fields.file.url}`}
							style={{ width: '100%' }}
						/>
					)}
					{post.fields.markdown2 && (
						<div className={styles.postContent}>
							<ReactMarkdown>
								{post.fields.markdown2}
							</ReactMarkdown>
						</div>
					)}
					{post.fields.image2 && (
						<img
							src={`https:${post.fields.image2.fields.file.url}`}
							style={{ width: '100%' }}
						/>
					)}
					{post.fields.markdown3 && (
						<div className={styles.postContent}>
							<ReactMarkdown>
								{post.fields.markdown3}
							</ReactMarkdown>
						</div>
					)}
					{post.fields.image3 && (
						<img
							src={`https:${post.fields.image3.fields.file.url}`}
							style={{ width: '100%' }}
						/>
					)}
					{post.fields.markdown4 && (
						<div className={styles.postContent}>
							<ReactMarkdown>
								{post.fields.markdown4}
							</ReactMarkdown>
						</div>
					)}
					{post.fields.image4 && (
						<img
							src={`https:${post.fields.image4.fields.file.url}`}
							style={{ width: '100%' }}
						/>
					)}
					{post.fields.markdown5 && (
						<div className={styles.postContent}>
							<ReactMarkdown>
								{post.fields.markdown5}
							</ReactMarkdown>
						</div>
					)}
				</div>
			</section>
			{showSharer && (
				<Sharer
					title={post.fields.title}
					short={post.fields.short}
					slug={post.fields.slug}
				/>
			)}
		</>
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

		return {
			props: {
				post,
			},
		}
	} catch (e) {
		console.log(e)
	}
}

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
