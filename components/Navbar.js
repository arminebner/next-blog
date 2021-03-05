import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={styles.container}>
			<ul className={styles.navUl}>
				<li className={styles.navLi}>
					<Link href='/'>Home</Link>
				</li>
				<li className={styles.navLi}>
					<Link href='/projects'>Projects</Link>
				</li>
				<li className={styles.navLi}>
					<Link href='/blog'>Blog</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
