import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Christian King</h1>
            </div>
            
                <Link href="/about"><a>About</a></Link>
                <Link href="/contact"><a>Contact Me</a></Link>
                <Link href="https://github.com/cskings14"><a>GitHub</a></Link>
                <Link href="/tutorial"><a>Tutorial</a></Link>
            
        </nav>
    );
}

export default Navbar;