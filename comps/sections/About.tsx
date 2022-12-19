import Image from 'next/image';
import styles from '../../styles/About.module.css';

const About = () => {
    return ( 
        <div className={styles.layout} id='about'>
            <div className={styles.paragraphs}>
            I started coding during the pandemic to cure my boredom. This hobby would later turn into a fruitful passion. I have a knack for understanding new software and have a deep passion for learning. Starting out, I learned python (out of school) and java (in school). As my base foundation of programming grew, I transitioned into different languages like C/Flutter and frameworks in which I use today.<p></p>Outside of programming, I spend my time playing music with my favorite genre being jazz. I have played the trumpet for nearly a decade. I am also learning the piano. I also have a profound love for video games. Video games are actually my reason for finding out about programming. 
            </div>
            <div>
                <Image src='/mepic.png' width={250} height={250} className={styles.selfie} />
            </div>
        </div>
     );
}
 
export default About;