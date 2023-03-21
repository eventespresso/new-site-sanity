import { Button, Flex, HStack, Img, LightMode, Text } from '@chakra-ui/react'
import { DarkModeToggle, InternalLink } from '../ui'


import styles from '@/styles/Header.module.scss'

const fontSize = {
	base: '2xl',
	tablet: '3xl',
	desktop: '4xl',
};

const Header: React.FC = () => {
	return (
		<Flex as='header' alignItems='center' direction={['column', 'column', 'column', 'row']} gap='2'>
			<InternalLink href="/" className={styles.espresso_logo__link}>
				{/* <div className={styles.espresso_logo__img_wrap}> */}
				<Img src="espresso-cup-logo.png"
					className={styles.espresso_logo__img}
					alt="Event Espresso"
					height='48'
					width='48'
					mr={2}
				/>
				{/* </div> */}
				<Text as='span' className={styles.espresso_logo__wordmark} fontSize={fontSize}>event espresso</Text>
			</InternalLink>
			<HStack className={styles.primary_nav} direction={['column', 'row']}>
				<InternalLink href="/pricing" className={styles.nav_link}>
					pricing
				</InternalLink>
				<InternalLink href="/features" className={styles.nav_link}>
					features
				</InternalLink>
				<InternalLink href="/use-cases" className={styles.nav_link}>
					use-cases
				</InternalLink>
				{/* </HStack>
			<Spacer />
			<HStack className={styles.secondary_nav} direction={['column', 'row']}> */}
				<InternalLink href="/account" className={styles.nav_link}>
					log in
				</InternalLink>
				<InternalLink href="/buy-now">
					<LightMode>
						<Button as="a" colorScheme='pink' size='sm'>Buy Now</Button>
					</LightMode>
				</InternalLink>
				<DarkModeToggle />
			</HStack>
		</Flex>
	);
}

export default Header;
