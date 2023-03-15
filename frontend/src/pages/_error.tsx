import type { ErrorProps } from 'next/error'
import type { NextPageContext } from 'next/types';

function Error({ statusCode }: ErrorProps) {
	return (
		<p>
			{statusCode
				? `An error ${statusCode} occurred on server`
				: 'An error occurred on client'}
		</p>
	)
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

export default Error;
