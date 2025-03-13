import Link from 'next/link';
const Nav = () => {
    return (
        <nav className="p-4">
            <ul className="flex space-x-6">
                <li>
                    <Link href="/" className="hover:underline">Home</Link>
                </li>
                <li>
                    <Link href="/tasks" className="hover:underline">Tasks</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Nav;