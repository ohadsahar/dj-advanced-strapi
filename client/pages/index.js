import EventItem from '@/components/EventItem';
import Layout from '@/components/Layout';
import Pagination from '@/components/Pagination';
import { API_URL, PER_PAGE } from '@/config/index';
import Link from 'next/link';


export default function Home({ events, page, total }) {

  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map(evt => (
        <EventItem key={evt?.id} evt={evt} />
      ))}
      {events.length > 0 && (
        <Link href="/events"><a className="btn-secondary">View All Events</a></Link>
      )}
      <Pagination page={page} total={total} />
    </Layout >
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json();
  console.log(total);

  const eventsResult = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`);
  const events = await eventsResult.json();
  return {
    props: { events, page: +page, total },
  }
}
