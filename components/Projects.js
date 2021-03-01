import styles from '../styles/Projects.module.css'

const Projects = () => {
	return (
		<>
			<div className={styles.jumpSpacer} id='projects'></div>
			<div className={styles.border}>
				<section className={styles.container}>
					<div className={styles.content}>
						<h2>Projects</h2>
						<div className={styles.cardContainer}>
							<div className={styles.cardContent}>
								<h3>Aviate.live</h3>
								<a href='https://aviate.live'>
									<div className={styles.aviateImg}></div>
								</a>
								<h4>Description:</h4>
								<p className={styles.description}>
									Flight-Tracking-App as a final project for
									the wbs coding school.
									<br />
									Explore the skies around you or anywhere in
									the world.
									<br />
									It is a work in Progress and my lovechild -
									so stay tuned for updates and new features!
								</p>
								<a href='https://aviate.live'>
									&rarr; Link to: live-website
								</a>
								<h4>Tech-Stack:</h4>
								<p className={styles.techstack}>
									Frontend: React.js, deployed to Netlify
									<br />
									Backend: Node.js/Express.js, deployed to
									Heroku
								</p>
							</div>
							<div className={styles.cardContent}>
								<h3>This Site</h3>
								<a href='https://github.com/arminebner?tab=repositories'>
									<div className={styles.blogImg}></div>
								</a>
								<h4>Description:</h4>
								<p className={styles.description}>
									My personal Portfolio/Blog is Open-Source as
									well.
									<br />
									It is as well a work in Progress. Started as
									React.js app, has now been converted to use
									Next.js as Framework.
									<br />
								</p>
								<a href='https://github.com/arminebner?tab=repositories'>
									&rarr; Link to: Github-Repo
								</a>
								<h4>Tech-Stack:</h4>
								<p className={styles.techstack}>
									Frontend - Next.js, deployed to my
									RaspberryPi Nginx Home-Server as a Docker
									image
									<br />
									Backend - Node.js/Express.js, deployed to my
									RaspberryPi Nginx Home-Server as a Docker
									image
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default Projects
