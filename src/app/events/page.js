"use client";
import { useEffect, useState } from 'react';
import EventList from '../../../components/EvantList';

export default function Page() {
    const [events, setEvents] = useState([]);
    const endpoint = "https://abarestaurants-staging-401581158498.us-central1.run.app/wp-json/lettuce/events"
    useEffect(() => {
        fetch(endpoint)
        .then((res) => res.json())
        .then((data) => setEvents(data))
        .catch((e) =>{ console.log(e) })
    },[])
  return (
    <main className="p-8">
      <h1 className="text-3xl font-baskerville ml-8">Upcoming Events</h1>
      <EventList events={events} />
    </main>
  );
}