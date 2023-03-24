import { type PropsWithChildren } from 'react';
import { NavigationLink, NavigationSubmenu } from './index'

import type { MenuItemProps } from '../../../types'

interface NavigationMenuItemProps extends PropsWithChildren {
	menu_item: MenuItemProps;
}

export const NavigationMenuItem = ({ menu_item }: NavigationMenuItemProps) => {
	return menu_item.has_submenu
		? <NavigationSubmenu menu_item={menu_item} />
		: <NavigationLink
			color={menu_item.color}
			href={menu_item.href}
			icon={menu_item.icon}
			text={menu_item.text}
			variant={menu_item.variant}
		/>;
}
