import styles from '../styles/Projects.module.css'

const Projects = () => {
	return (
		<>
			<h2 className={styles.projectsH2}>Projects</h2>
			<div className={styles.description}>
				<p>
					Here is the place to check out the projects I have been
					working on or worked on in the past:
				</p>
				<p>
					I want to give you information about the project and the
					used Tech-Stack.
				</p>
				<p>Some are live-websites you can visit right now.</p>
			</div>
			<div className={styles.border}>
				<section className={styles.container}>
					<div className={styles.content}>
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
									It is a work in Progress and the lovechild
									of my passion for both aviation and
									programming - so stay tuned for updates and
									new features!
								</p>
								<a href='https://aviate.live'>
									&rarr; Link to: live-website
								</a>
								<h4>Tech-Stack:</h4>
								<p className={styles.techstack}>
									Frontend: React.js <br />
									Deployed to: Netlify
									<br />
									Backend: Node.js/Express.js <br />
									Deployed to: Heroku
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
									Frontend: Next.js <br />
									Deployed to: RaspberryPi Nginx Home-Server
									as a Docker image
									<br />
									Backend: Node.js/Express.js, MongoDB <br />
									Deployed to: RaspberryPi Nginx Home-Server
									as a Docker image
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
