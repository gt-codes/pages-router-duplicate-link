import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		// eslint-disable-next-line @next/next/no-html-link-for-pages
		<a href='/about'>Go to About</a>
	);
}
