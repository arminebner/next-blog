import { NextSeo } from 'next-seo'
import styles from '../styles/Projects.module.css'

const Projects = () => {
	const seo = {
		title: 'Projects',
		description:
			'An Overview of the projects i have been workin on or worked on in the past',
		openGraph: {
			url: 'https://www.arminebner.com/projects',
			title: 'blog',
			description:
				'An Overview of the projects i have been workin on or worked on in the past',
		},
	}

	return (
		<>
			<NextSeo {...seo} />
			<h2 className={styles.projectsH2}>Projects</h2>
			<div className={styles.description}>
				<p>
					Here is the place to check out the projects I have been
					working on or worked on in the past.
				</p>
				<p>
					I want to give you information about the project and the
					used Tech-Stack.
				</p>
				<br></br>
				<p>Some are live-websites you can visit right now.</p>
			</div>
			<div className={styles.border}>
				<div className={styles.container}>
					<div className={styles.content}>
						<h3>&rarr; Aviate.live &larr;</h3>
						<a href='https://aviate.live'>
							<div className={styles.aviateImg}></div>
						</a>
						<h4>Description:</h4>
						<p className={styles.description}>
							Flight-Tracking-App as a final project for the wbs
							coding school.
							<br />
							Explore the skies around you or anywhere in the
							world.
							<br />
							<br></br>
							It is a work in Progress and the lovechild of my
							passion for both aviation and programming - so stay
							tuned for updates and new features!
						</p>
						<a className={styles.link} href='https://aviate.live'>
							&rarr; Link to: Live-Website
						</a>
						<h4>Tech-Stack:</h4>
						<p className={styles.techstack}>
							Frontend: React.js <br />
							Deployed to: GitHub-Pages
							<br />
							Backend: Node.js/Express.js <br />
							Deployed to: Heroku
						</p>
					</div>
				</div>
			</div>
			<div className={styles.border}>
				<div className={styles.container}>
					<div className={styles.content}>
						<h3>&rarr; This Site &larr;</h3>
						<a href='https://github.com/arminebner?tab=repositories'>
							<div className={styles.blogImg}></div>
						</a>
						<h4>Description:</h4>
						<p className={styles.description}>
							My personal Portfolio/Blog is Open-Source as well.
							<br />
							<br></br>
							It is as well a work in Progress. Started as
							React.js app, has now been converted to use Next.js
							as Framework and Contentful as a headless CMS.
							<br />
						</p>
						<a
							className={styles.link}
							href='https://github.com/arminebner?tab=repositories'>
							&rarr; Link to: Github-Repo
						</a>
						<h4>Tech-Stack:</h4>
						<p className={styles.techstack}>
							Frontend: Next.js <br />
							Deployed to: RaspberryPi Nginx Home-Server as a
							Docker image
							<br />
							Backend: Node.js/Express.js, MongoDB <br />
							Deployed to: RaspberryPi Nginx Home-Server as a
							Docker image
						</p>
					</div>
				</div>
			</div>
			<div className={styles.border}>
				<div className={styles.container}>
					<div className={styles.content}>
						<h3>&rarr; Prumbaum-Lagerverkauf &larr;</h3>
						<a href='https://www.prumbaum-lagerverkauf.de/'>
							<div className={styles.pbImg}></div>
						</a>
						<h4>Description:</h4>
						<p className={styles.description}>
							My first experience with WordPress in a production
							environment.
							<br />
							<br></br>
							I build this Site during the first Covid-19
							lockdown-phase in early 2020 to support a sales
							branch that before only existed locally and would
							otherwise have not been able to make ongoing profit.
							And that in a time of rapidly increasing demand.
							<br />
						</p>
						<a
							className={styles.link}
							href='https://www.prumbaum-lagerverkauf.de/'>
							&rarr; Link to: Live-Site
						</a>
						<h4>Tech-Stack:</h4>
						<p className={styles.techstack}>
							WordPress Catalogue-Site with a self-made theme and
							some minor adjustments in functions and plugins.
							Including backups and GDPR-compliance for
							Google-Analytics-tracking.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Projects
