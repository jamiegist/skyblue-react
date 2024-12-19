import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <ul class="max-w-screen-xl flex flex-wrap items-center justify-betewen mx-auto p-4">
             <li class="text-white  flex flex-wrap items-center justify-between mx-auto p-4">
                <Link class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/">Sky Blue</Link>
             </li>
             <li class="text-white flex flex-wrap items-center justify-between mx-auto p-4">
                <Link class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="shop">Shop</Link>
             </li>
             <li class="text-white flex flex-wrap items-center justify-between mx-auto p-4">
                <Link class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="about">About</Link>
             </li>
            </ul>
        </nav>
    );
}