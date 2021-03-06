import styles from '../styles/Icons.module.css'

const Icons = () => {
	return (
		<>
			<div className={styles.icons}>
				<div className={styles.css}>
					<img
						className={styles.icon}
						src='/icons/css3.svg'
						alt='css3 icon'
					/>
				</div>
				<div className={styles.linux}>
					<img
						className={styles.icon}
						src='/icons/linux.svg'
						alt='linux icon'
					/>
				</div>
				<div className={styles.html5}>
					<img
						className={styles.icon}
						src='/icons/html5.svg'
						alt='html5 icon'
					/>
				</div>
				<div className={styles.node}>
					<img
						className={styles.icon}
						src='/icons/node-dot-js.svg'
						alt='nodejs icon'
					/>
				</div>
				<div className={styles.raspberry}>
					<img
						className={styles.icon}
						src='/icons/raspberrypi.svg'
						alt='raspberrypi icon'
					/>
				</div>
			</div>
			<div className={styles.icons}>
				<div className={styles.js}>
					<img
						className={styles.icon}
						src='/icons/javascript-dark.svg'
						alt='javascript icon'
					/>
				</div>
				<div className={styles.netlify}>
					<img
						className={styles.icon}
						src='/icons/netlify.svg'
						alt='netlify icon'
					/>
				</div>
				<div className={styles.next}>
					<img
						className={styles.icon}
						src='/icons/next-dot-js.svg'
						alt='next icon'
					/>
				</div>
				<div className={styles.react}>
					<img
						className={styles.icon}
						src='/icons/react.svg'
						alt='react icon'
					/>
				</div>
				<div className={styles.heroku}>
					<img
						className={styles.icon}
						src='/icons/heroku.svg'
						alt='heroku icon'
					/>
				</div>
			</div>
			<div className={styles.icons}>
				<div className={styles.pop}>
					<img
						className={styles.icon}
						src='/icons/pop_os.svg'
						alt='pop_os icon'
					/>
				</div>
				<div className={styles.git}>
					<img
						className={styles.icon}
						src='/icons/git.svg'
						alt='git icon'
					/>
				</div>
				<div className={styles.docker}>
					<img
						className={styles.icon}
						src='/icons/docker.svg'
						alt='docker icon'
					/>
				</div>
				<div className={styles.mongo}>
					<img
						className={styles.icon}
						src='/icons/mongodb.svg'
						alt='mongodb icon'
					/>
				</div>
			</div>
		</>
	)
}

export default Icons
