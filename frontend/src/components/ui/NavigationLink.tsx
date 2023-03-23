import { type PropsWithChildren } from 'react';
import {
	Button,
	LightMode,
	ListItem,
} from '@chakra-ui/react'
import { InternalLink } from '../ui'

import styles from '@/styles/Header.module.scss'

interface NavigationLinkProps extends PropsWithChildren {
	color: string;
	href: string;
	text: string;
	variant: string;
}
export const NavigationLink = ({ color, href, text, variant }: NavigationLinkProps) => {
	return (
		<ListItem className={styles.mobile_menu}>
			<InternalLink href={href} className={styles.nav_link}>
				<LightMode>
					<Button colorScheme={color} variant={variant}>{text}</Button>
				</LightMode>
			</InternalLink>
		</ListItem>
	);
}
