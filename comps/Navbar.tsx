import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                
            </div>
            
                <Link href="/about"><a>About</a></Link>
                <Link href="/contact"><a>Contact Me</a></Link>
                <Link href="https://github.com/cskings14"><a>GitHub</a></Link>
                <Link href="/tutorial"><a>Tutorial</a></Link>
            
        </nav>
    );
}

export default Navbar;