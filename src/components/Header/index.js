import Link from 'next/link';

import { HeaderWrapper } from './styles.js';

export function Header() {
	return (
		<HeaderWrapper>
			<div className='headerContent'>
				<h1>
					<Link href='/' scroll={false} prefetch={false}>
						AERO
					</Link>
				</h1>
				<nav className='navMenu'>
					<ul>
						<li>
							<Link href='/' scroll={false} prefetch={false}>
								Home
							</Link>
						</li>
						<li>
							<Link href='/about-us' scroll={false} prefetch={false}>
								About Us
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</HeaderWrapper>
	);
}
