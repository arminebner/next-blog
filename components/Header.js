import Image from 'next/image'
import styles from '../styles/Header.module.css'

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.upper}>
				<p className={styles.welcome}>Welcome to</p>
				<p className={styles.arminebner}>arminebner.com</p>
				<div className={styles.space}></div>
				<p>a space for</p>
				<p>
					Web-Technologies<br></br>Linux<br></br>etc
				</p>
			</div>
			<div className={styles.lower}>
				<div className={styles.scroll}>
					<Image
						src='/icons/scroll.svg'
						layout='fixed'
						height={60}
						width={60}
						alt='mouse-scroll-down'
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
