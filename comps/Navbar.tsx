import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="Name">
                <h1>Christian King</h1>
            </div>
            <div>
                <Link href="/about"><a>About</a></Link>
                <Link href="/contact"><a>Contact Me</a></Link>
                <Link href="https://github.com/cskings14"><a>GitHub</a></Link>
                <Link href="/tutorial"><a>Tutorial</a></Link>
            </div>
        </nav>
    );
}

export default Navbar;