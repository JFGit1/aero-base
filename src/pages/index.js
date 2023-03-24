import Seo from '@/components/Seo';
import { Footer } from '@/components/Footer';
import LayoutMotion from '@/components/LayoutMotion';

export default function Home() {
	return (
		<>
			<LayoutMotion>
				<Seo title='Aero Design' desc='Content of the homepage.' />
				<main>
					<h1>Welcome</h1>
				</main>
				<Footer />
			</LayoutMotion>
		</>
	);
}
