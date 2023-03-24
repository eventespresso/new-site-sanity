import { type PropsWithChildren } from 'react';
import {
	List,
	IconButton,
	Menu,
	MenuButton,
	useDisclosure,
	VisuallyHidden
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { NavigationMenuItem } from './index'

import type { MenuItemProps } from '../../../types'

interface NavigationProps extends PropsWithChildren {
	menu_items: Array<MenuItemProps>
}
export const Navigation = ({ menu_items }: NavigationProps) => {
	const { getDisclosureProps, getButtonProps } = useDisclosure();
	const buttonProps = getButtonProps()
	const disclosureProps = getDisclosureProps()
	return (
		<Menu as='nav' aria-labelledby="main_menu_label" role="navigation" {...disclosureProps}>
			<VisuallyHidden id="main_menu_label">Main Menu</VisuallyHidden>
			<MenuButton
				as={IconButton}
				aria-label='Options'
				icon={<HamburgerIcon />}
				variant='ghost'
				{...buttonProps}
			/>
			<List as='ul' className='primary_nav'>
				{menu_items && menu_items.map((menu_item: any) => (
					<NavigationMenuItem key={menu_item._key} menu_item={menu_item} />
				))}
			</List>
		</Menu>
	);
}
