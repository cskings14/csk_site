import Link from 'next/link';
import Image from 'next/image';

// import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
    return (
        <nav >
                <Image src="/ck-logo.png" width={50} height={50} />
                <Link href="/about"><a>About</a></Link>
                <Link href="/contact"><a>Contact Me</a></Link>
                <Link href="https://github.com/cskings14"><a>GitHub</a></Link>
                <Link href="/tutorial"><a>Tutorial</a></Link>
            
        </nav>
    );
}

export default Navbar;