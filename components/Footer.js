import styles from '../styles/Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.footerContent}>
				<div className={styles.contact}>
					<a href='https://github.com/arminebner'>
						<img
							style={{ width: '30px', height: '30px' }}
							src='/icons/github_badge.svg'
							alt='github logo'
						/>
					</a>
					<a href='https://www.linkedin.com/in/armin-ebner'>
						<img
							style={{ width: '30px', height: '30px' }}
							src='/icons/linkedin-sharer.svg'
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
