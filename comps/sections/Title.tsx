import Image from "next/image";
import styles from "../../styles/Title.module.css"
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';


const Title = () => {
    return ( 
        <div className={styles.grid}>
                <Image className={styles.picture} src='/code.png' width={500} height={500} />
                <motion.div className={styles.text}
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}>I am Christian King</motion.div>
                <Spline width={500} height={500} className={styles.spline} scene="https://prod.spline.design/1OZ7ne96bkvlkwAj/scene.splinecode" />
        </div>
     );
}
 
export default Title;