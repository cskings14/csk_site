import React from 'react';
import { useState } from 'react';
import styles from "../../styles/Projects.module.css"
import Image from 'next/image';
import { ProjectData } from "./ProjectData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';



const Projects = ({ slides }: { slides: any }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className={styles.project}>
            <FaArrowAltCircleLeft onClick={prevSlide} className={styles.lclick} />
            {ProjectData.map((slide, index) => {
                return (
                    <div
                        // className={index === current ? 'slide active' : 'slide'}
                        className={styles.active}
                        key={index}
                    >
                        {index === current && (
                            <>
                                <div className={styles.title} >Come check out my projects!</div>
                                <Image src={slide.image} className={styles.image} width={800} height={550} />
                                <div className={styles.info}>{slide.about}</div>
                                <a href={slide.url} className={styles.url} ><button>Link To Github</button></a>
                            </>
                        )}
                    </div>
                )
            })}
           <FaArrowAltCircleRight onClick={nextSlide} className={styles.rclick} />
        </div>
    );
}


export default Projects;





{/* <>      
                
                <Image src={slide.image} width={1000} height={600} className={styles.image} />
                <div className={styles.info}>{slide.about}</div>
                <a href={slide.url}>GitHub</a>
                </> */}












{/* <div className={styles.box}>
            <CarouselProvider
                visibleSlides={1}
                totalSlides={3}
                step={1}
                naturalSlideWidth={250}
                naturalSlideHeight={250}
                hasMasterSpinner
            >
                <h2 className={styles.headline}>Carousel (With Master Loading Spinner)</h2>
                <p>
                    This spinner will go away after all the images have loaded. You might want to use
                    Chrome dev tools to throttle the network connection so you can see the spinner.
                </p>
                <Slider className={styles.slider}>
                    <Slide index={0}>
                        <img src='/dog.png' width={250} height={250} />
                    </Slide>
                    <Slide index={1}>
                        <img src="/cat.png" width={250} height={250}/>
                    </Slide>
                    <Slide index={2}>
                        <img src="/fish.png" width={250} height={250}/>
                    </Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                <DotGroup />
            </CarouselProvider>
        </div> */}

// was not worth it to use the package instead of making it myself