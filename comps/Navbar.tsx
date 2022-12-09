import {Link} from 'react-scroll/modules';
import Image from 'next/image';

// import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <ul>
                    <li className='nav-item'>
                        <Link to='title' smooth={true} duration={500}>Title</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' smooth={true} duration={500} offset={-120}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='projects' smooth={true} duration={500} offset={150} >Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='footer' smooth={true} duration={500}>Links</Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;