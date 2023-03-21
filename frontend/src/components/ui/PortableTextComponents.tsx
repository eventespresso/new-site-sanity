import NextLink from 'next/link'
import { Heading, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { PortableTextComponents as iPortableTextComponents } from '@portabletext/react';
import { ExternalLink, InternalLink } from './index'

export const PortableTextComponents: iPortableTextComponents = {
	block: {
		h1: ({ children }) => <Heading as='h1'>{children}</Heading>,
		h2: ({ children }) => <Heading as='h2'>{children}</Heading>,
		h3: ({ children }) => <Heading as='h3'>{children}</Heading>,
		h4: ({ children }) => <Heading as='h4'>{children}</Heading>,
		h5: ({ children }) => <Heading as='h5'>{children}</Heading>,
		h6: ({ children }) => <Heading as='h6'>{children}</Heading>,
		p: ({ children }) => <Text>{children}</Text>,
	},
	marks: {
		abbr: ({ children }) => <Text as='abbr'>{children}</Text>, // abbreviation
		b: ({ children }) => <Text as='b'>{children}</Text>, // bold
		cite: ({ children }) => <Text as='cite'>{children}</Text>, // citation
		del: ({ children }) => <Text as='del'>{children}</Text>, // deleted
		em: ({ children }) => <Text as='em'>{children}</Text>, // emphasis
		i: ({ children }) => <Text as='i'>{children}</Text>, // italic
		ins: ({ children }) => <Text as='ins'>{children}</Text>, // inserted
		kbd: ({ children }) => <Text as='kbd'>{children}</Text>, // keyboard; ex: ctrl + c
		mark: ({ children }) => <Text as='mark'>{children}</Text>, // highlighted
		s: ({ children }) => <Text as='s'>{children}</Text>, // strikethrough
		samp: ({ children }) => <Text as='samp'>{children}</Text>, // sample
		sub: ({ children }) => <Text as='sub'>{children}</Text>, // sub
		sup: ({ children }) => <Text as='sup'>{children}</Text>, // sup
		u: ({ children }) => <Text as='u'>{children}</Text>, // underline

		// Ex. 2: rendering a custom `link` annotation
		link: ({ value, children }) => {
			return (value?.href || '').startsWith('http')
				? <ExternalLink href={value?.href}>{children}</ExternalLink>
				: <InternalLink href={value?.href}>{children}</InternalLink>;
		},
	},
};
