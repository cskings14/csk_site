import styles from "../../styles/Title.module.css"
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';



const Title = () => {
    return (
        <div id='title'>
            <div className={styles.craig}>Say hi to Craig, The Portfolio Mascot!</div>
            <Spline width={750} height={500} className={styles.spline} scene="https://prod.spline.design/i2qWHbrOX5xoo-Ut/scene.splinecode" />
            <motion.div className={styles.name}
                whileTap={{
                    scale: 0.8,
                    rotate: -360,
                    borderRadius: "100%"
                  }}>Hello, I am Christian King <span className={styles.wave}>&#9995;</span></motion.div>
            <motion.div className={styles.job}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 6 }}
            >Fullstack Developer (Django / React)</motion.div>
        </div>
    );
}

export default Title;