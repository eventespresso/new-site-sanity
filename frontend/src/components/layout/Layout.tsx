import { PropsWithChildren } from 'react'
import { Container } from '@chakra-ui/react'

import Header from './Header';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Container maxW='container.xl'>
			<Header />
			{children}
		</Container>
	);
}
