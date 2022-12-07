import Image from "next/image";
import Pdf from "../Resumeex.pdf";


const Footer = () => (
    <footer>
        <ul className="footer-list">
            <a href="https://www.linkedin.com/in/cskings/"><Image src="/linkedin.png" width={50} height={50} /></a>
            <a href="https://github.com/cskings14"><Image src="/github.png" width={50} height={50} /></a>
            <a href={Pdf} rel="noopener noreferrer" target="_blank">
            <Image src="/resume.png" width={50} height={50} />
            </a>
        </ul>
    </footer>
)

export default Footer;