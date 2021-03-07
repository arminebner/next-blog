import Link from 'next/link'
import styles from '../styles/Posts.module.css'

const Posts = ({ posts }) => {
	return (
		<>
			{posts &&
				posts.map(post => (
					<section className={styles.border} key={post.fields.slug}>
						<div className={styles.container}>
							<Link
								href='/post/[slug]'
								as={`/post/${post.fields.slug}`}>
								<div className={styles.previewImageContainer}>
									<img
										style={{
											width: '100%',
											height: '100%',
										}}
										className={styles.previewImage}
										src={`https:${post.fields.headerImage.fields.file.url}`}
									/>
								</div>
							</Link>
							<div className={styles.postText}>
								<Link
									href='/post/[slug]'
									as={`/post/${post.fields.slug}`}>
									<h2 className={styles.postTitle}>
										{post.fields.title}
									</h2>
								</Link>
								<p
									className={styles.postExcerpt}
									dangerouslySetInnerHTML={{
										__html: post.fields.short,
									}}></p>
								<Link
									href='/post/[slug]'
									as={`/post/${post.fields.slug}`}>
									<p className={styles.readMore}>read more</p>
								</Link>
							</div>
						</div>
					</section>
				))}
		</>
	)
}

export default Posts
