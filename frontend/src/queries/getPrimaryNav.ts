import { client } from '../../client';
import type { GetStaticProps } from 'next'; // GetStaticPaths, GetServerSideProps, GetStaticProps

export const getPrimaryNav: GetStaticProps = async () => {
	return await client.fetch(`*[_type == "navigation_menu" && slug.current == "primary_nav"][0]`);
};
