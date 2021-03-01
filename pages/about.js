import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = () => {
	return (
		<>
			<div className={styles.jumpSpacer} id='about'></div>
			<div className={styles.border}>
				<section className={styles.container}>
					<div className={styles.content}>
						<h1>About me and this page</h1>
						<Image
							src='/images/portrait-round-color.png'
							layout='fixed'
							width={250}
							height={250}
							alt='portrait of the site-author'
						/>
						<div className={styles.textContent}>
							<h3>Hi!</h3>
							<p>
								My name is <span>Armin</span>
							</p>
							<p>
								I am a <span>Junior Full-Stack-Developer</span>{' '}
								with a passion for everything IT.
							</p>
							<p>
								From{' '}
								<span>
									REACT, NODE, HTML, CSS to RaspberryPi
								</span>{' '}
								- I am fascinated with technology and the
								possibilities it offers to us.
							</p>
							<p>
								Have a look at my previous and current projects
								and read about my (or our?) learning experiences
								in the blog-section. I love learning and I want
								to share my experiences with you.
							</p>
							<p>
								<span>I strive</span> to be as{' '}
								<span>imaginative and knowledgeable</span> as I
								possibly can and I am{' '}
								<span>
									in my element when I am solving problems.
								</span>
							</p>
							<p>
								<span>Putting the pieces together</span> on a
								larger scale <span>just makes me happy!</span>{' '}
								From development to deployment: <br></br>I like
								every step of the process!
							</p>
							<p>
								So, WELCOME! <br></br> Have a nice stay and{' '}
								<span>don't hesitate to get in touch ;)</span>
							</p>
							<p>Technologies I currently learn / use:</p>
						</div>
						<div className={styles.iconSection}>
							<div className={styles.category}>
								<h4>For development</h4>
								<div className={styles.icons}>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/html5.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/css3.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/javascript.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/react.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/node-dot-js.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/next-dot-js.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
								</div>
							</div>
							<div className={styles.category}>
								<h4>For deployment</h4>
								<div className={styles.icons}>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/docker.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/github_badge.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/raspberrypi.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/netlify.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/heroku.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
								</div>
							</div>
							<div className={styles.category}>
								<h4>Currently used OS</h4>
								<div className={styles.icons}>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/pop_os.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/ubuntu.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
									<div className={styles.iconContainer}>
										<Image
											src='/icons/windows.svg'
											layout='fixed'
											width={40}
											height={40}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default About
