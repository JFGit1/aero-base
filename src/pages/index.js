import Seo from '@/components/Seo';
import { Footer } from '@/components/Footer';
import LayoutMotion from '@/components/LayoutMotion';

export default function Home() {
	console.log('load home');
	return (
		<div className='pt-28'>
			<LayoutMotion>
				<Seo title='Aero Design' desc='Content of the homepage.' />
				<main className='container mx-auto'>
					<h1 className='mb-4 text-3xl'>Welcome</h1>
					<div>
						<figure className='overflow-hidden rounded-xl bg-slate-100 p-8 dark:bg-slate-800 md:flex md:p-0'>
							<img className='mx-auto h-24 w-24 rounded-full md:h-auto md:w-48 md:rounded-none ' src='/images/image-01.jpg' alt='' width='384' height='512' />
							<div className='space-y-4 pt-6 text-center md:p-8 md:text-left'>
								<blockquote>
									<p className='text-lg font-light'>
										Vivamus laoreet enim eu nunc dignissim iaculis non eget enim. Curabitur dui sapien, scelerisque vitae turpis vitae, commodo consectetur erat.
									</p>
								</blockquote>
								<figcaption className='font-medium'>
									<div className='text-sky-500 dark:text-sky-400'>Duis Consectetur</div>
									<div className='text-slate-700 dark:text-slate-500'>Phasellus eget</div>
								</figcaption>
							</div>
						</figure>
					</div>
				</main>
				<Footer />
			</LayoutMotion>
		</div>
	);
}
