import Link from 'next/link'
import styles from '@/styles/Header.module.scss'
import layout from '@/styles/layout.module.scss'

const Header: React.FC = () => {
	return (
		<header className={layout.full_width}>
			<div className={`${styles.header__wrap} ${layout.container}`}>
				<Link href="/" className={styles.espresso_logo__link}>
					<div className={styles.espresso_logo__img_wrap}>
						<img src="/espresso-cup-logo.png" className={styles.espresso_logo__img} alt="Event Espresso" />
					</div>
					<span className={styles.espresso_logo__wordmark}>event espresso</span>
				</Link>
			</div>
		</header>
	);
}

export default Header;
