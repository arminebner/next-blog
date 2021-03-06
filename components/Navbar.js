import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={styles.container}>
			<div className={styles.content}>
				<div className={styles.logo}>
					<div className={styles.letterA}>a</div>
					<div className={styles.letterE}>e</div>
				</div>
				<ul className={styles.navUl}>
					<li className={styles.navLi}>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li className={styles.navLi}>
						<Link href='/projects'>
							<a>Projects</a>
						</Link>
					</li>
					<li className={styles.navLi}>
						<Link href='/blog'>
							<a>Blog</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
