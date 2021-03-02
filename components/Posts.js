import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Posts.module.css'

const Posts = ({ posts }) => {
	return (
		<section className={styles.border}>
			{posts &&
				posts.map(post => (
					<div
						className={styles.container}
						key={post.slug}
						id='post.sys.id'>
						<Link href='/post/[slug]' as={`/post/${post.slug}`}>
							<div className={styles.previewImageContainer}>
								<Image
									className={styles.previewImage}
									src={post.mobileHeaderImagePath}
									layout='fill'
								/>
							</div>
						</Link>
						<div className={styles.postText}>
							<Link href='/post/[slug]' as={`/post/${post.slug}`}>
								<h2 className={styles.postTitle}>
									{post.title}
								</h2>
							</Link>
							<p
								className={styles.postExcerpt}
								dangerouslySetInnerHTML={{
									__html: post.short_description,
								}}></p>
							<Link href='/post/[slug]' as={`/post/${post.slug}`}>
								<p className={styles.readMore}>read more</p>
							</Link>
						</div>
					</div>
				))}
		</section>
	)
}

export default Posts
