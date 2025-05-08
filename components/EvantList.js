"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function EvantList({ events }) {
    const [selectedEvents, setSelectedEvents] = useState([])
    const [sortedEvents, setSortedEvents] = useState([])
    const [selectedCity, setSelectedCity] = useState("All");

    const allCities = ["All", ...new Set(events.flatMap(evt => evt.cities))];

    const cleanerDate = (dateStr) => {
        const cleanedDate = dateStr.replace(/(\d+)(st|nd|rd|th)/, `$1`);
        return new Date(cleanedDate)
    }
    const startOfDay = (date) => {
        const day = new Date(date);
        day.setHours(0,0,0,0)
        return day.getTime();
    }
    // const handleEvents = (filteredEvents) => {
    //     const todayDate = startOfDay(new Date());
    //     const newEvents = filteredEvents.filter(evt => {
    //         if(!evt.date) {
    //             return true
    //         } 
    //         const event = startOfDay(cleanerDate(evt.date))
    //         return event >= todayDate;
    //     })
    //    .sort((a,b) => {
    //         if (a.date == null && b.date == null) {
    //             return 0;
    //         }
    //         if (a.date == null) {
    //             return 1;
    //         }
    //         if (b.date == null) {
    //             return -1;
    //         }
    //         const dateA = cleanerDate(a.date)
    //         const dateB = cleanerDate(b.date)
    //         return dateA.getTime() - dateB.getTime();
    //     })
    //     setSelectedEvents(newEvents);
    // }

    useEffect (() => {
        const todayDate = startOfDay(new Date());
        const newEvents = events.filter(evt => {
            if(!evt.date) {
                return true
            } 
            const event = startOfDay(cleanerDate(evt.date))
            return event >= todayDate;
        })
       .sort((a,b) => {
            if (a.date == null && b.date == null) {
                return 0;
            }
            if (a.date == null) {
                return 1;
            }
            if (b.date == null) {
                return -1;
            }
            const dateA = cleanerDate(a.date)
            const dateB = cleanerDate(b.date)
            return dateA.getTime() - dateB.getTime();
        })
        setSelectedEvents(newEvents);
        setSortedEvents(newEvents)
    },[events])
    
    const filteredEvents = (city) => {
        if (city === "All") {
            setSortedEvents(selectedEvents)
        } else {
            const filteredEventsByCity = selectedEvents.filter(evt => evt.cities.includes(city));
            setSortedEvents(filteredEventsByCity)
        }
    }
    const handleSelectCity = (city) => {
        setSelectedCity(city)
        filteredEvents(city);
    }

    return (
        <main className="p-8 space-y-6">
            <div className="flex gap-2 mb-6">
                {allCities.map(city => (
                <button
                    key={city}
                    onClick={() => handleSelectCity(city)}
                    className={`
                    px-4 py-1 rounded hover:cursor-pointer 
                    ${selectedCity === city
                        ? 'bg-lightgreen text-white'
                        : 'bg-grayish text-midnight'}
                    `}
                >
                    {city}
                </button>
                ))}
            </div>
            <ul className="space-y-4 ">
                { sortedEvents.length != 0 ? 
                    sortedEvents.map((evt) => (
                        <li key={evt.ID} className="flex flex-col-reverse gap-6 items-start mb-10 border-1 border-lightgreen p-5">
                            <Image
                                src={evt.featured_image.url}
                                alt={evt.featured_image.alt_text}
                                width={500}
                                height={500}
                                className=" object-cover rounded"
                            />
                            <div>
                                <h2 className="text-xl font-baskerville">{evt.title}</h2>
                                <p className="text-md text-gray-500">{evt.date ? `Event Date: ${evt.date}` : 'Date to be determined'}</p>
                                <p className="text-lg mt-1 font-outfit text-gray-700"
                                    dangerouslySetInnerHTML={{ __html: evt.content }}
                                />
                                {evt.cta_url && (
                                    <a
                                        href={evt.cta_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-sm mt-2 px-6 py-2 bg-burgendy text-white rounded"
                                        >
                                        {evt.cta_btn}
                                    </a>
                                )}
                            </div>
                        </li>
                    )) :
                    <div className=" w-full items-center justify-center">
                        <h1 key={"1"} className="flex text-5xl w-full font-outfit text-center">No events found in this city!</h1>
                    </div>
                }
            </ul>
        </main>
    );
}
