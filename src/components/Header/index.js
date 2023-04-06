import Link from 'next/link';
import { motion } from 'framer-motion';
import { MenuLink } from '../MenuLink';

export function Header() {
	return (
		<div className='top-0 left-0 z-20 w-full bg-slate-800 px-4 md:fixed '>
			<header className='container mx-auto flex flex-col items-center py-4 md:flex-row md:justify-between'>
				<motion.h1
					className='text-5xl font-bold leading-none'
					whileHover={{ scale: 1.05 }}
					transition={{ type: 'spring', stiffness: 400, damping: 10 }}
					whileTap={{ scale: 0.95 }}>
					<Link
						className='text-sky-500'
						href='/'
						scroll={false}
						prefetch={false}>
						AERO
					</Link>
				</motion.h1>
				<nav>
					<ul className='m-0 mt-2 flex gap-5 p-0 text-base md:mt-0'>
						<li>
							<MenuLink label='Home' url='/' />
						</li>
						<li>
							<MenuLink label='About Us' url='/about-us' />
						</li>
						<li>
							<MenuLink label='Projects' url='/projects' />
						</li>
						<li>
							<MenuLink label='Cards' url='/cards' />
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
