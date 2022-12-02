import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, DotGroup, ButtonNext, ImageWithZoom } from 'pure-react-carousel';
import styles from "../../styles/Projects.module.css"
import Image from 'next/image';

const Projects = () => {
    return (
        <div className={styles.box}>
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
                        <Image src='/code.png' width={250} height={250} />
                    </Slide>
                    <Slide index={1}>
                        <ImageWithZoom src="./media/img02.jpeg" />
                    </Slide>
                    <Slide index={2}>
                        <ImageWithZoom src="./media/img03.jpeg" />
                    </Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                <DotGroup />
            </CarouselProvider>
        </div>
    );
}

export default Projects;