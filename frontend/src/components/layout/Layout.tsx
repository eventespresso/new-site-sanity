import type { PropsWithChildren } from 'react'

import { Header } from './Header';

interface LayoutProps extends PropsWithChildren {
	primary_nav: any
}
export const Layout = ({ children, primary_nav }: LayoutProps) => {
	return (
		<>
			<Header primary_nav={primary_nav} />
			{children}
		</>
	);
}
