"use client"
import {FC, MouseEvent, TouchEvent, useState} from "react"
import classes from "./EntitySlider.module.scss"
import {EntitySliderProps} from "./EntitySliderProps";

const slides = [
    {
        title: "1"
    },
    {
        title: "2"
    },
    {
        title: "3"
    }
]
export const EntitySlider: FC<EntitySliderProps> = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);

    const handleSlideChange = (dragOffset: number) => {
        if (dragOffset > 20) {
            handlePrevSlide();
            setIsDragging(false);
        } else if (dragOffset < -20) {
            handleNextSlide();
            setIsDragging(false);
        }
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setDragStartX(event.clientX);
    };
    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const dragOffset = event.clientX - dragStartX;
        console.log(dragOffset)
        handleSlideChange(dragOffset);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setDragStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const dragOffset = event.touches[0].clientX - dragStartX;
        handleSlideChange(dragOffset);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className={classes.slider}>
            <div onMouseDown={handleMouseDown}
                 onMouseMove={handleMouseMove}
                 onMouseUp={handleMouseUp}
                 onTouchStart={handleTouchStart}
                 onTouchMove={handleTouchMove}
                 onTouchEnd={handleTouchEnd}
                 className={classes.slidesContainer}
                 style={{transform: `translateX(-${currentSlide * 100}%)`}}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${classes.slide} ${index === currentSlide ? classes.active : ""} ${index < currentSlide ? classes.left : ""} ${index > currentSlide ? classes.right : ""}`}
                    >
                        {slide.title}
                    </div>
                ))}
            </div>

            <button className={classes.prevButton} onClick={handlePrevSlide}>
                Previous
            </button>
            <button className={classes.nextButton} onClick={handleNextSlide}>
                Next
            </button>
        </div>
    );
};
