import Image from 'next/image';
import styles from '../../styles/About.module.css';

const About = () => {
    return ( 
        <div className={styles.layout}>
            <div className={styles.paragraphs}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra non lacus vitae convallis. Morbi vulputate egestas massa, vitae pharetra lorem sagittis quis. <p></p>Fusce facilisis accumsan leo a facilisis. Praesent sed tristique lacus, nec porta eros. Sed placerat orci ac finibus eleifend. Mauris varius ultrices euismod. Maecenas laoreet metus sit amet leo tristique imperdiet. Ut interdum velit vitae tellus facilisis tincidunt. Maecenas magna est...
            </div>
            <div>
                <Image src='/code.png' width={250} height={250} className={styles.selfie} />
            </div>
        </div>
     );
}
 
export default About;