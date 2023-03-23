import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react';
import type { ReactNode } from 'react';
// import type { GetServerSideProps } from 'next'

import theme from '../../styles/theme'

interface ChakraProps {
	cookies: Partial<{ [key: string]: string; }>;
	children: ReactNode;
}

export const Chakra: React.FC<ChakraProps> = ({ cookies, children }) => {
	// b) Pass `colorModeManager` prop
	const colorModeManager =
		typeof cookies === 'string'
			? cookieStorageManagerSSR(cookies)
			: localStorageManager

	return (
		<ChakraProvider colorModeManager={colorModeManager} theme={theme}>
			{children}
		</ChakraProvider>
	)
}

// // also export a reusable function getServerSideProps
// const getServerSideProps: GetServerSideProps = async ({ req }) => {
// 	return {
// 		props: {
// 			// first time users will not have any cookies and you may not return
// 			// undefined here, hence ?? is necessary
// 			cookies: req.headers.cookie ?? '',
// 		},
// 	}
// }

// export { GetServerSideProps };
