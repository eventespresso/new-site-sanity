import { Link, type LinkProps } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

interface ExternalLinkProps extends LinkProps {
	hideIcon?: boolean;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ children, hideIcon = false, ...props }) => {
	const icon = !hideIcon ? <ExternalLinkIcon ml='1' /> : null;
	return (
		<Link color='blue.500' isExternal={true} {...props}>{children}{icon}</Link>
	);
}
