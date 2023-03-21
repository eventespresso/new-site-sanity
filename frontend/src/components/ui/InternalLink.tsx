import NextLink from 'next/link'
import { Link, type LinkProps } from '@chakra-ui/react'

export const InternalLink: React.FC<LinkProps> = ({ children, ...props }) => (
	<Link as={NextLink} {...props}>{children}</Link>
);
