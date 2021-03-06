import { useState, useEffect } from 'react'
import IconsTitle from './IconsTitle'
import MainTitle from './MainTitle'
import styles from '../styles/Header.module.css'

const Header = () => {
	const [switchTitle, setSwitchTitle] = useState(false)

	useEffect(() => {
		const switchTitle = () => {
			setSwitchTitle(true)
		}
		setTimeout(switchTitle, 5500)
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.upper}>
				<p className={styles.welcome}>Welcome to</p>
				<div className={styles.title}></div>
				{!switchTitle ? <IconsTitle /> : <MainTitle />}
				<div className={styles.underline}></div>
			</div>
			<div className={styles.lower}>
				<div className={styles.space}>
					<h2>
						a <br></br>space<br></br> for
					</h2>
					<p>
						Web-Technologies<br></br>Linux<br></br>etc
					</p>
				</div>
				<div className={styles.scroll}>
					<img
						style={{ height: '60px', width: '60px' }}
						src='/icons/scroll.svg'
						alt='mouse-scroll-down'
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
