import { Suspense } from 'react';
import TicketsList from './TicketsList';
import Loading from '../Loading';
import Link from 'next/link';

export default function Tickets() {
	return (
		<main>
			<nav>
				<div>
					<h2>Tickets</h2>
					<p>
						<small>Currently open Tickets</small>
					</p>
					<button className='btn-primary'>
						<Link className='text-white' href='/tickets/create'>Create New Ticket.</Link>
					</button>
				</div>
			</nav>
			<Suspense fallback={<Loading />}>
				<TicketsList />
			</Suspense>
		</main>
	);
}
