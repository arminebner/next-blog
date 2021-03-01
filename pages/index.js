import Header from '../components/Header'
import Projects from '../components/Projects'
import About from '../components/About'

const Home = () => {
	return (
		<>
			<Header />
			<div className='generalSpacer'></div>
			<About />
			<div className='generalSpacer'></div>
			<Projects />
			<div className='generalSpacer'></div>
		</>
	)
}

export default Home
