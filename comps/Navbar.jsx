import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="Name">
                <h1>Christian King</h1>
            </div>

            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            <Link href="https://github.com/cskings14"><a>Repository</a></Link>
            <Link href="/tutorial"><a>Tutorial</a></Link>

        </nav>
     );
}
 
export default Navbar;