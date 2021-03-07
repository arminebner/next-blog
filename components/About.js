import styles from '../styles/About.module.css'

const About = () => {
	return (
		<>
			<h2 className={styles.aboutH2}>About me and this page</h2>
			<div className={styles.border}>
				<section className={styles.container}>
					<div className={styles.content}>
						<div className={styles.textContent}>
							<div className={styles.leftColumn}>
								<div className={styles.portraitImg}>
									<img
										style={{
											width: '200px',
											height: '200px',
										}}
										src='/images/portrait-round-color.png'
										alt='portrait of the site-author'
									/>
								</div>
								<h3>Hi!</h3>
								<p>
									My name is <span>Armin</span>
								</p>
								<p>
									I am a{' '}
									<span>Junior Full-Stack-Developer</span>{' '}
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
									Have a look at my previous and current
									projects and read about my (or our?)
									learning experiences in the blog-section. I
									love learning and I want to share my
									experiences with you.
								</p>
							</div>
							<div className={styles.rightColumn}>
								<p>
									<span>I strive</span> to be as{' '}
									<span>imaginative and knowledgeable</span>{' '}
									as I possibly can and I am{' '}
									<span>
										in my element when I am solving
										problems.
									</span>
								</p>
								<p>
									<span>Putting the pieces together</span> on
									a larger scale{' '}
									<span>just makes me happy!</span> From
									development to deployment: <br></br>I like
									every step of the process!
								</p>
								<p>
									So, WELCOME! <br></br> Have a nice stay and{' '}
									<span>
										don't hesitate to get in touch ;)
									</span>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default About
