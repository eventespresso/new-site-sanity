import { type PropsWithChildren, useMemo } from 'react';
import {
	Box,
	Flex,
	Icon,
	IconButton,
	Img,
	List,
	HStack,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'
import { FaBars } from "react-icons/fa";
import { DarkModeToggle, InternalLink, Navigation } from '../ui'

// import styles from '@/styles/Header.module.scss'

interface HeaderProps extends PropsWithChildren {
	primary_nav: any
}

export const Header = ({ primary_nav }: HeaderProps) => {

	const { getDisclosureProps, getButtonProps } = useDisclosure();
	const buttonProps = getButtonProps()
	const disclosureProps = getDisclosureProps()

	const bg = useColorModeValue('cyan.400', 'cyan.900');
	const colorMode = useColorModeValue('light', 'dark');

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
			<Box as='header' bg={bg} className='header__wrap'>
				<Flex className={`header ${colorMode}`}  >
					{/* <IconButton
						aria-label='Menu'
						aria-expanded="false"
						className='menu_toggle'
						icon={<Icon as={FaBars} boxSize='8' />}
						variant='ghost'
						{...buttonProps}
					/> */}
					<InternalLink href="/" className='home__link'>
						<Img src="espresso-cup-logo.png"
							className='home__logo'
							alt="Event Espresso"
							height='48'
							width='48'
							mr={2}
						/>
						<Text as='span' className='home__wordmark' fontSize={fontSize}>event espresso</Text>
					</InternalLink>
					<Navigation menu_items={primary_nav} />
					{/* <Flex as='nav' aria-labelledby="mainmenulabel" role="navigation" {...disclosureProps}>
						<h2 id="mainmenulabel" className="visuallyhidden">Main Menu</h2>
						<List as='ul' className='primary_nav'>
							{primary_nav.map((link: any) => (
								<NavigationLink
									key={link._key}
									href={link.href}
									color={link.color}
									variant={link.variant}
									text={link.text}
								/>
							))}
						</List>
					</Flex> */}
					<DarkModeToggle className='dark_mode_toggle' />
				</Flex>
				{/* <Box className={`menu_mobile ${colorMode}`}>
				</Box> */}
			</Box>
			<SkipNavContent />
		</>
	);
}
