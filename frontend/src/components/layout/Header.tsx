import { type PropsWithChildren, useMemo } from 'react';
import {
	Box,
	Button,
	Container,
	Flex,
	IconButton,
	Img,
	LightMode,
	List,
	ListItem,
	Text,
	useColorModeValue
} from '@chakra-ui/react'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'
import { FaBars } from "react-icons/fa";
import { DarkModeToggle, InternalLink } from '../ui'

import styles from '@/styles/Header.module.scss'

interface HeaderProps extends PropsWithChildren {
	primary_nav: any
}

export const Header = ({ primary_nav }: HeaderProps) => {
	console.log('%c primary_nav', 'color: HotPink;', primary_nav);
	const bg = useColorModeValue('cyan.400', 'cyan.900');

	const flexDir = useMemo(
		() => { return { phone: 'column', tablet: 'row' } },
		[]
	);
	const fontSize = useMemo(
		() => {
			return {
				base: '2xl',
				tablet: '3xl',
				desktop: '4xl',
			}
		},
		[]
	);

	return (
		<>
			<SkipNavLink>Skip to content</SkipNavLink>
			<Box as='header' bg={bg} className={styles.header__wrap}>
				<Flex className={styles.header}  >
					<InternalLink href="/" className={styles.home__link}>
						<Img src="espresso-cup-logo.png"
							className={styles.home__logo}
							alt="Event Espresso"
							height='48'
							width='48'
							mr={2}
						/>
						<Text as='span' className={styles.home__wordmark} fontSize={fontSize}>event espresso</Text>
					</InternalLink>
					<Flex as='nav' aria-labelledby="mainmenulabel" role="navigation">
						<h2 id="mainmenulabel" className="visuallyhidden">Main Menu</h2>
						<List as='ul' className={styles.primary_nav}>
							<ListItem className={styles.mobile_menu}>
								<InternalLink href="/pricing" className={styles.nav_link}>
									<Button colorScheme='blue' variant='ghost'>pricing</Button>
								</InternalLink>
							</ListItem>
							<ListItem className={styles.mobile_menu}>
								<InternalLink href="/features" className={styles.nav_link}>
									<Button colorScheme='blue' variant='ghost'>features</Button>
								</InternalLink>
							</ListItem>
							<ListItem className={styles.mobile_menu}>
								<InternalLink href="/use-cases" className={styles.nav_link}>
									<Button colorScheme='blue' variant='ghost'>use-cases</Button>
								</InternalLink>
							</ListItem>
							<ListItem className={styles.mobile_menu}>
								<InternalLink href="/account" className={styles.nav_link}>
									<Button colorScheme='blue' variant='ghost'>log in</Button>
								</InternalLink>
							</ListItem>
							<ListItem className={styles.no_hover}>
								<InternalLink href="/buy-now">
									<LightMode>
										<Button colorScheme='pink'>Buy Now</Button>
									</LightMode>
								</InternalLink>
							</ListItem>
							<ListItem className={styles.menu_toggle}>
								<IconButton aria-label='Menu' aria-expanded="false" icon={<FaBars />} variant='ghost' />
							</ListItem>
						</List>
					</Flex>
				</Flex>
				<DarkModeToggle className={styles.dark_mode_toggle} />
			</Box>
			<SkipNavContent />
		</>
	);
}
