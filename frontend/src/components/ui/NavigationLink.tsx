import { Icon, MenuItem } from '@chakra-ui/react'
import type { MenuItemProps } from '../../../types'

type NavigationLinkProps = Omit<MenuItemProps, 'submenu' | 'has_submenu'>

export const NavigationLink = ({ href, text, color = 'blue', variant = 'ghost', icon = null }: NavigationLinkProps) => {
	return (
		<MenuItem as='a'
			className={`nav_link ${color} ${variant}`}
			color={color}
			href={href}
			icon={icon ? <Icon as={icon} /> : undefined}
		>
			{text}
		</MenuItem>
	);
}
