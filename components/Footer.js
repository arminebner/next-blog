import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.footerContent}>
				<div className={styles.contact}>
					<a href='https://github.com/arminebner'>
						<Image
							src='/icons/github_badge.svg'
							layout='fixed'
							width={30}
							height={30}
							alt='github logo'
						/>
					</a>
					<a href='https://www.linkedin.com/in/armin-ebner'>
						<Image
							src='/icons/linkedin-sharer.svg'
							layout='fixed'
							width={30}
							height={30}
							alt='linked-in logo'
						/>
					</a>
				</div>
				<p className={styles.footnote}>Armin Ebner &copy; 2021</p>
			</div>
		</footer>
	)
}

export default Footer
