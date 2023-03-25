import Link from 'next/link';

export function Header() {
	return (
		<div className='fixed top-0 left-0 z-50 w-full bg-slate-800 px-4 '>
			<header className='container mx-auto flex flex-col items-center py-4 md:flex-row md:justify-between'>
				<h1 className='text-5xl font-bold leading-none'>
					<Link className='text-sky-500' href='/' scroll={false} prefetch={false}>
						AERO
					</Link>
				</h1>
				<nav>
					<ul className='flex gap-5 text-base'>
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
			</header>
		</div>
	);
}
