import { type PropsWithChildren, useMemo } from 'react';
import {
	Box,
	Flex,
	IconButton,
	Img,
	List,
	ListItem,
	Text,
	useColorModeValue
} from '@chakra-ui/react'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'
import { FaBars } from "react-icons/fa";
import { DarkModeToggle, InternalLink, NavigationLink } from '../ui'

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
							{primary_nav.map((link: any) => (
								<NavigationLink
									key={link._key}
									href={link.href}
									color={link.color}
									variant={link.variant}
									text={link.text}
								/>
							))}
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
