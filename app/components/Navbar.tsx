'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import StarBorder from './StarBorder/StarBorder';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }


        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-100 z-50 text-black animate-fadeIn">
            <div className="container mx-auto px-3 py-3 flex justify-between items-center relative">
                <Link href="/">
                    <div className="text-xl font-bold pl-4 cursor-pointer hover:text-gray-600 transition-colors">
                        JACKDULS
                    </div>
                </Link>
                <ul className="hidden md:flex gap-8 list-none justify-center flex-1">
                    <li className="group relative">
                        <Link href="/" className="transition-colors hover:font-bold">
                            Home
                        </Link>
                        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all transform -translate-x-1/2 group-hover:w-full group-hover:h-0.5"></span>
                    </li>
                    <li className="group relative">
                        <Link href="/collection" className="transition-colors hover:font-bold">
                            Collection
                        </Link>
                        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all transform -translate-x-1/2 group-hover:w-full group-hover:h-0.5"></span>
                    </li>
                    <li className="group relative">
                        <Link href="/contact" className="transition-colors hover:font-bold">
                            Contact
                        </Link>
                        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all transform -translate-x-1/2 group-hover:w-full group-hover:h-0.5"></span>
                    </li>
                </ul>
                <div className="hidden md:block pr-4 ">
                    <Link href="https://wa.me/6285940487295 ">
                        <StarBorder
                            as="button"
                            className="px-4 py-2 rounded-full cursor-pointer"
                            color="red"
                            speed="2s"
                        >
                            Order Now!
                        </StarBorder>
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded focus:outline-none"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div ref={menuRef} className="md:hidden mt-2 pb-4 bg-white rounded-b-lg">
                    <ul className="flex flex-col gap-4 text-center pt-[10px]">
                        <li className="group relative">
                            <Link
                                href="/"
                                className="block py-2 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all group-hover:w-full group-hover:h-0.5"></span>
                        </li>
                        <li className="group relative">
                            <Link
                                href="/collection"
                                className="block py-2 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Collection
                            </Link>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all group-hover:w-full group-hover:h-0.5"></span>
                        </li>
                        <li className="group relative">
                            <Link
                                href="/contact"
                                className="block py-2 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all group-hover:w-full group-hover:h-0.5"></span>
                        </li>

                        <li className="mt-4 px-4">
                            <Link href="https://wa.me/6285940487295 " onClick={() => setIsOpen(false)}>
                                <StarBorder
                                    as="button"
                                    className="w-full py-2 rounded-full shadow-lg "
                                    color="red"
                                    speed="2s"
                                >
                                    Order Now!
                                </StarBorder>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}