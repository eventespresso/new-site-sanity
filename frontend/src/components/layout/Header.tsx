import Image from 'next/image'
import { Link } from '@chakra-ui/next-js'
import buttons from '@/styles/Buttons.module.scss'
import styles from '@/styles/Header.module.scss'
import layout from '@/styles/Layout.module.scss'

const Header: React.FC = () => {
	return (
		<header className={layout.full_width}>
			<div className={`${styles.header__wrap} ${layout.container}`}>
				<div className={styles.primary_nav}>
					<Link href="/" className={styles.espresso_logo__link}>
						<div className={styles.espresso_logo__img_wrap}>
							<Image src="/espresso-cup-logo.png"
								className={styles.espresso_logo__img}
								alt="Event Espresso"
								height='48'
								width='48'
							/>
						</div>
						<span className={styles.espresso_logo__wordmark}>event espresso</span>
					</Link>
					<Link href="/pricing" className={styles.nav_link}>
						pricing
					</Link>
					<Link href="/features" className={styles.nav_link}>
						features
					</Link>
					<Link href="/use-cases" className={styles.nav_link}>
						use-cases
					</Link>
				</div>
				<div className={styles.secondary_nav}>
					<Link href="/account" className={styles.nav_link}>
						my account
					</Link>
					<Link href="/buy-now" className={`${buttons.button} ${buttons.button__small} ${buttons.button__buy_now}`}>
						Buy Now
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
