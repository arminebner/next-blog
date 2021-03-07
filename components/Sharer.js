import {
	LinkedinShareButton,
	TelegramShareButton,
	TwitterShareButton,
} from 'react-share'
import styles from '../styles/Sharer.module.css'

const Sharer = props => {
	const { title, short, slug } = props

	return (
		<div className={styles.sharerContainer}>
			<div className={styles.sharerContent}>
				<div className={styles.twitterBox}>
					<TwitterShareButton
						url={`https://www.arminebner.com/post/${slug}`}>
						<img
							style={{ width: '30px', height: '30px' }}
							src='/icons/twitter.svg'
							alt='twitter'
						/>
					</TwitterShareButton>
					{/* <a
						href='https://twitter.com/share?ref_src=twsrc%5Etfw'
						class='twitter-share-button'
						data-show-count='false'>
						
					</a> */}
				</div>
				<div className={styles.linkedinBox}>
					<LinkedinShareButton
						url={`https://www.arminebner.com/post/${slug}`}
						title={title}
						summary={short}
						source={'arminebner.com'}>
						<img
							style={{ width: '30px', height: '30px' }}
							src='/icons/linkedin-sharer.svg'
							width={30}
							height={30}
							alt='linkedin'
						/>
						{/* <a
						href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location}`}></a> */}
					</LinkedinShareButton>
				</div>
				{/* <div className={styles.whatsappBox}>
					<WhatsappShareButton url={window.location}>
						<Image
							src='/icons/whatsapp.svg'
							width={30}
							height={30}
							alt='whatsapp'
						/>
					</WhatsappShareButton>
				</div> */}
				<div className={styles.telegramBox}>
					<TelegramShareButton
						url={`https://www.arminebner.com/post/${slug}`}>
						<img
							style={{ width: '30px', height: '30px' }}
							src='/icons/telegram.svg'
							width={30}
							height={30}
							alt='telegram'
						/>
					</TelegramShareButton>
				</div>
			</div>
		</div>
	)
}

export default Sharer
