import Seo from '@/components/Seo';
import { Footer } from '@/components/Footer';
import LayoutMotion from '@/components/LayoutMotion';
import Image from 'next/image';

import { PROJECT_PAGE } from '@/services/graphql/queries';
import apolloClient from '@/services/apollo-client';

export default function Projects({ projectPage }) {
	console.log('load projects');

	return (
		<div className='px-4 pt-8 md:pt-28'>
			<Seo title='Projects | Aero Design' description='This is the Projects page' />

			<LayoutMotion>
				<main className='container mx-auto'>
					<div>
						<h1 className='mb-4 text-3xl'>Projects</h1>

						<h2 className='mb-0 mt-12 text-3xl text-blue-500'>{projectPage.title}</h2>
						<ul className='mt-6 bg-blue-900 p-4'>
							{projectPage?.projImages?.nodes.map((prodItem, i) => {
								const prodArrImgBlur = prodItem.srcSet.split(' ');
								const prodImgBlur = prodArrImgBlur[0];
								//console.log('prodImgBlur:', prodImgBlur);
								return (
									<li key={prodItem.id}>
										<Image
											src={prodItem.sourceUrl}
											srcSet={prodItem.srcSet}
											alt={prodItem.title}
											height={prodItem.mediaDetails.height}
											width={prodItem.mediaDetails.width}
											blurDataURL={prodImgBlur}
											placeholder='blur'
											loading='lazy'
										/>
									</li>
								);
							})}
						</ul>
					</div>
				</main>
				<Footer />
			</LayoutMotion>
		</div>
	);
}

export async function getServerSideProps(context) {
	const { data } = await apolloClient.query({
		query: PROJECT_PAGE,
		// variables: { id: '301' },
	});

	return {
		props: {
			projectPage: data.projects.nodes[0],
		},
	};
}
