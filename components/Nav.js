"use client";
import NavLink from 'next/link';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md flex-col">
            <div className="flex w-full items-center md:justify-between justify-around mt-3">
                <div className="hidden w-1/6 md:flex flex-col items-center justify-end space-x-4">
                    <div className="flex items-center space-x-4 -ml-10">
                        <NavLink href="/" className="flex items-center">
                            <Image
                                src="/icons/x.png"
                                alt="Mon Abi Gabi Twitter"
                                width={30}
                                height={30}
                                // className="h-8 w-8"
                            />
                        </NavLink>
                        <NavLink href="/" className="flex items-center">
                            <Image
                                src="/icons/ig.png"
                                alt="Mon Abi Gabi Instagram"
                                width={30}
                                height={30}
                                // className="h-8 w-8"
                            />
                        </NavLink>
                        <NavLink href="/" className="flex items-center">
                            <Image
                                src="/icons/fb.png"
                                alt="Mon Abi Gabi Facebook"
                                width={30}
                                height={30}
                                // className="h-8 w-8"
                            />
                        </NavLink>
                    </div>
                    <div className="relative w-full h-[1px] mt-3 bg-lightgreen -ml-10">
                        <div className="absolute right-0 top-1/10 -translate-y-1/2 w-1 h-1 rounded-full shadow-sm bg-lightgreen"/>
                    </div>
                </div>
                <NavLink href="/" className=" items-center ">
                    <Image
                        src="/images/logo.png"
                        alt="Mon Abi Gabi Logo"
                        width={400}
                        height={140}
                        className="h-1/2"
                    />
                </NavLink>
                <div className="hidden w-1/6 md:flex flex-col items-center justify-end space-x-4 -mr-10">
                    <div className="md:flex flex-col items-center text-black">
                        <h2 className="text-xl font-serif" >Chicago</h2>
                        <NavLink
                            href="/"
                            className={`text-sm text-center`}
                        >
                            CHANGE LOCATION
                        </NavLink>
                    </div>
                    <div className="relative w-full h-[1px] mt-3 bg-lightgreen">
                        <div className="absolute left-0 top-1/10 -translate-y-1/2 w-1 h-1 rounded-full shadow-sm bg-lightgreen"/>
                    </div>
                </div>
                <div className="block md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none hover:cursor-pointer ml-2">
                        <Image
                            src="/icons/menu.png"
                            alt="Mon Abi Gabi menu"
                            width={50}
                            height={50}
                        />
                    </button>
                </div>
            </div>
            <div className="hidden md:flex space-x-12 mt-8 font-serif">
                <NavLink
                    href="/#reservations"
                    className={`text-gray-700 hover:text-red-800`}
                >
                    Reservations
                </NavLink>
                <NavLink
                    href="/menu"
                    className={`text-gray-700 hover:text-red-800`}
                >
                    Menu
                </NavLink>
                <NavLink
                    href="/events"
                    className={`text-gray-700 hover:text-red-800`}
                >
                    Events
                </NavLink>
                <NavLink
                    href="/private-parties"
                    className={`text-gray-700 hover:text-red-800 text-center`}
                >
                    Private Parties
                </NavLink>
                <NavLink
                    href="/pick-up"
                    className={`text-gray-700 hover:text-red-800 text-center`}
                >
                    Pick Up
                </NavLink>
                <NavLink
                    href="/delivery"
                    className={`text-gray-700 hover:text-red-800`}
                >
                    Delivery
                </NavLink>
                <NavLink
                    href="/contact"
                    className={`text-gray-700 hover:text-red-800 text-center`}
                >
                    Contact Us
                </NavLink>
                <NavLink
                    href="/gallery"
                    className={`text-gray-700 hover:text-red-800`}
                >
                    Gallery
                </NavLink>
            </div>
            {
            isOpen && (
                <div className="flex md:hidden fixed inset-0 bg-white z-50 flex-col items-center justify-center space-y-6 font-serif">
                    <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-2xl hover:cursor-pointer text-black">
                        ✕
                    </button>
                    <Link href="/#reservation" className="text-xl text-black hover:text-red-800" onClick={() => setIsOpen(false)}>Reservation</Link>
                    <Link href="/menu" className="text-xl text-black hover:text-red-800" onClick={() => setIsOpen(false)}>Menu</Link>
                    <Link href="/events" className="text-xl text-black hover:text-red-800" onClick={() => setIsOpen(false)}>Events</Link>
                    <Link href="/private-parties" className="text-xl text-black hover:text-red-800" onClick={() => setIsOpen(false)}>Private Parties</Link>
                    <Link href="/pick-up" className="text-xl text-black hover:text-red-800" onClick={() => setIsOpen(false)}>Pick Up</Link>
                    <Link href="/delivery" className="text-xl text-black hover:text-red-800" onClick={() => setIsOpen(false)}>Delivery</Link>
                    <Link href="/contact" className="text-xl text-black hover:text-red-800" onClick={() => setIsOpen(false)}>Contact Us</Link>
                    <Link href="/gallery" className="text-xl text-black hover:text-red-800" onClick={() => setIsOpen(false)}>Gallery</Link>
                    <div className="relative w-1/2 h-[1px] mt-3 bg-lightgreen">
                        <div className="absolute left-0 top-1/10 -translate-y-1/2 w-1 h-1 rounded-full shadow-sm bg-lightgreen"/>
                        <div className="absolute right-0 top-1/10 -translate-y-1/2 w-1 h-1 rounded-full shadow-sm bg-lightgreen"/>
                    </div>
                    <div className="flex items-center space-x-4 mt-4">
                        <NavLink href="/" className="flex items-center">
                            <Image
                                src="/icons/x.png"
                                alt="Mon Abi Gabi Twitter"
                                width={30}
                                height={30}
                                // className="h-8 w-8"
                            />
                        </NavLink>
                        <NavLink href="/" className="flex items-center">
                            <Image
                                src="/icons/ig.png"
                                alt="Mon Abi Gabi Instagram"
                                width={30}
                                height={30}
                                // className="h-8 w-8"
                            />
                        </NavLink>
                        <NavLink href="/" className="flex items-center">
                            <Image
                                src="/icons/fb.png"
                                alt="Mon Abi Gabi Facebook"
                                width={30}
                                height={30}
                                // className="h-8 w-8"
                            />
                        </NavLink>
                    </div>
                    <div className="md:flex flex-col items-center justify-center text-black">
                        <h2 className="text-xl text-center font-serif" >Chicago</h2>
                        <NavLink
                            href="/"
                            className={`text-sm text-center`}
                        >
                            CHANGE LOCATION
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}