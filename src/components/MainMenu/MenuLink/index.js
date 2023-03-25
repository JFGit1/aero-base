import Link from 'next/link';

export function MenuLink({ label, url }) {
	return (
		<Link href={url} scroll={false} prefetch={false} className='text-white transition-all duration-300 hover:text-sky-500'>
			{label}
		</Link>
	);
}
