import { client } from '../../client';
import type { GetStaticProps, GetStaticPropsResult } from 'next'; // GetServerSideProps, GetStaticPaths, GetStaticProps
import type { HomepageProps } from '../../types';

export const getHomepageProps: GetStaticProps = async (): Promise<GetStaticPropsResult<HomepageProps>> => {
	return await client.fetch(`*[_type == "homepage"][0]`);
};
