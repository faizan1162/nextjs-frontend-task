import { ReactNode } from "react";
import Link from "next/link";
import "styles/globals.css"; // Import global styles
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "components/Nav";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <head />
        <body className={`${inter.className} bg-gray-100`}>
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <Link href="/">Task Management</Link>
                </h1>
               <Nav />
            </div>
        </header>
        <main className="container mx-auto px-4 py-6">
            {children}
        </main>
        <ToastContainer />
        <footer className="bg-gray-800 text-white text-center py-4 mt-10">
            <p>&copy; {new Date().getFullYear()} Task Management. All rights reserved.</p>
        </footer>
        </body>
        </html>
    );
}