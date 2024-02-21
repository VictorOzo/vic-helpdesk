import Image from 'next/image';
import Link from 'next/link';
import Logo from './dojo-logo.png';

export default function Navbar() {
	return (
		<nav>
			<Image
				src={Logo}
				placeholder='blur'
				alt='Vic Helpdesk Logo'
				width={70}
			/>
			<h1>Vic Helpdesk</h1>
			<Link href='/'>Dashboard</Link>
			<Link href='/tickets'>Tickets</Link>
		</nav>
	);
}
