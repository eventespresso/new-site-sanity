// import Image from 'next/image'
import { Link } from '@chakra-ui/next-js'
import { Button, Flex, HStack, Img, LightMode, Spacer } from '@chakra-ui/react'
import { DarkModeToggle } from '../ui'

import buttons from '@/styles/Buttons.module.scss'
import styles from '@/styles/Header.module.scss'

const Header: React.FC = () => {
	return (
		<Flex as='header' /* className={styles.header__wrap }*/ alignItems='center' direction={['column', 'row']} gap='2'>
			<Link href="/" className={styles.espresso_logo__link}>
				<div className={styles.espresso_logo__img_wrap}>
					<Img src="espresso-cup-logo.png"
						className={styles.espresso_logo__img}
						alt="Event Espresso"
						height='48'
						width='48'
					/>
				</div>
				<span className={styles.espresso_logo__wordmark}>event espresso</span>
			</Link>
			<HStack className={styles.primary_nav}>
				<Link href="/pricing" className={styles.nav_link}>
					pricing
				</Link>
				<Link href="/features" className={styles.nav_link}>
					features
				</Link>
				<Link href="/use-cases" className={styles.nav_link}>
					use-cases
				</Link>
			</HStack>
			<Spacer />
			<HStack className={styles.secondary_nav} direction={['column', 'row']}>
				<Link href="/account" className={styles.nav_link}>
					my account
				</Link>
				<Link href="/buy-now">
					<LightMode>
						<Button as="a" colorScheme='pink' size='sm'>Buy Now</Button>
					</LightMode>
				</Link>
				<DarkModeToggle />
			</HStack>
		</Flex>
	);
}

export default Header;
