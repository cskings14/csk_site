import Image from "next/image";



const Footer = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('../res.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'res.pdf';
                alink.click();
            })
        })
    }

    return (
    <footer>
        <ul className="footer-list" id='footer'>
            <a href="https://www.linkedin.com/in/cskings/"><Image src="/linkedin.png" width={50} height={50} /></a>
            <a href="https://github.com/cskings14"><Image src="/github.png" width={50} height={50} /></a>
            <Image src="/resume.png" width={50} height={50} onClick={onButtonClick} className="resume" />
        </ul>
        <div className="num-email">(215) 939-7247 • cskings@gmail.com</div>
    </footer>
    )
}

export default Footer;