import Image from "next/image";
import styles from "../../styles/Title.module.css"
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';


const Title = () => {
    return ( 
        <div id='title'>
                <Spline width={750} height={500} className={styles.spline} scene="https://prod.spline.design/i2qWHbrOX5xoo-Ut/scene.splinecode" />
                <motion.div className={styles.name}>Hello, I am Christian King <span className={styles.wave}>&#9995;</span></motion.div>
                <motion.div className={styles.job}>Fullstack Developer (Django / React)</motion.div>
                <div className={styles.grid}>
                    {/*This is where we are going to have both what I code and a small picture*/}
                </div>
        </div>
     );
}
 
export default Title;