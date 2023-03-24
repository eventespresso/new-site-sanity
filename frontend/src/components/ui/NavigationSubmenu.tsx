import { type PropsWithChildren } from 'react';
import {
	Button,
	Menu,
	MenuButton,
	MenuList,
	useDisclosure,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { NavigationLink } from './index'
import type { MenuItemProps } from '../../../types'

interface NavigationSubmenuProps extends PropsWithChildren {
	menu_item: MenuItemProps
}
export const NavigationSubmenu = ({ menu_item }: NavigationSubmenuProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Menu isOpen={isOpen}>
			<MenuButton as={Button}
				colorScheme={menu_item.color}
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
			>
				{menu_item.text} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
			</MenuButton>
			<MenuList className='primary_nav' onMouseEnter={onOpen} onMouseLeave={onClose}>
				{menu_item.submenu && menu_item.submenu.map((sub_menu_item: any) => {
					return (
						<NavigationLink
							key={sub_menu_item._key}
							color={sub_menu_item.color}
							href={sub_menu_item.href}
							icon={sub_menu_item.icon}
							text={sub_menu_item.text}
							variant={sub_menu_item.variant}
						/>
					);
				})}
			</MenuList>
		</Menu>
	);
}
