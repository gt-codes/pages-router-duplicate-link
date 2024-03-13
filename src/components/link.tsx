import { useRouter } from 'next/router'; // Corrected import
import { PropsWithChildren } from 'react';
import { LinkProps } from 'next/link';

export default function CustomLink({ href, children, ...props }: PropsWithChildren<LinkProps>) {
	const router = useRouter();

	let hrefAsString: string;
	if (typeof href === 'object' && href.pathname) hrefAsString = href.pathname;
	else hrefAsString = href as string;

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<a href={hrefAsString} onClick={handleClick} {...props}>
			{children}
		</a>
	);
}
