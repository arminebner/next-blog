import styles from '../styles/MainTitle.module.css'

const MainTitle = () => {
	return (
		<>
			<div className={styles.arminebner}>
				<div className={styles.letterA}>a</div>
				<div className={styles.letterR}>r</div>
				<div className={styles.letterM}>m</div>
				<div className={styles.letterI}>i</div>
				<div className={styles.letterN}>n</div>
			</div>
			<div className={styles.arminebner}>
				<div className={styles.letterE}>e</div>
				<div className={styles.letterB}>b</div>
				<div className={styles.letterN2}>n</div>
				<div className={styles.letterE2}>e</div>
				<div className={styles.letterR2}>r</div>
			</div>
			<div className={styles.arminebner}>
				<div className={styles.letterDot}>.</div>
				<div className={styles.letterC}>c</div>
				<div className={styles.letterO}>o</div>
				<div className={styles.letterM2}>m</div>
			</div>
		</>
	)
}

export default MainTitle
