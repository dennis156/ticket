"use client"
import React from "react";

const NavbarMenu = () => {
return (
<div>
<nav className="bg-gray-100">
<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
<div className="relative flex items-center justify-between h-16">
<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
<button
type="button"
className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
aria-controls="mobile-menu"
aria-expanded="false"
>
<span className="sr-only">Open main menu</span>
{/* Icono de hamburguesa */}
<svg
className="block h-6 w-6"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
aria-hidden="true"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M4 6h16M4 12h16m-7 6h7"
/>
</svg>
</button>
</div>
<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
<div className="flex-shrink-0 flex items-center">
<a
href="#"
className="text-gray-800 font-bold text-xl"
>
Navbar w/ text
</a>
</div>
<div className="hidden sm:block sm:ml-6">
<div className="flex space-x-4">
<a
href="#"
className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
>
Home
</a>
<a
href="#"
className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
>
Features
</a>
<a
href="#"
className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
>
Pricing
</a>
</div>
</div>
</div>
<span className="hidden sm:flex sm:items-center sm:ml-6">
Navbar text with an inline element
</span>
</div>
</div>

<div className="sm:hidden" id="mobile-menu">
<div className="px-2 pt-2 pb-3 space-y-1">
<a
href="#"
className="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
>
Home
</a>
<a
href="#"
className="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
>
Features
</a>
<a
href="#"
className="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
>
Pricing
</a>
</div>
</div>
</nav>
</div>
);
};

export default NavbarMenu;