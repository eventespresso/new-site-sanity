import { PropsWithChildren } from 'react'

import Header from './Header';
import layout from '@/styles/Layout.module.scss'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={`${layout.body_wrap} body_wrap`}>
			<Header />
			{children}
		</div>
	);
}
