import Link from 'next/link';

export const getStaticProps = async () => {
	return {
		props: {
			date: new Date().toISOString(),
		},
		revalidate: 10,
	};
};

export default function About({ date }: { date: string }) {
	return (
		<div className=''>
			About page - {date}
			<br />
			<Link href='/' prefetch={false}>
				Go Home
			</Link>
		</div>
	);
}
