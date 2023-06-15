"use client"
import { Children, FC, MouseEvent, TouchEvent, useState } from "react";
import classes from "./EntitySlider.module.scss";
import { EntitySliderProps } from "./EntitySliderProps";

export const EntitySlider: FC<EntitySliderProps> = ({ children, slidesToShow = 1, baseButtons, currentSlideCustom, setCurrentSlideCustom  }) => {
    const slides = Children.toArray(children);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);

    const isCurrentSlide = typeof currentSlideCustom === "number"? currentSlideCustom : currentSlide

    const handleSlideChange = (dragOffset: number) => {
        if (dragOffset > 20) {
            handlePrevSlide();
            setCurrentSlide(false);
        } else if (dragOffset < -20) {
            handleNextSlide();
            setCurrentSlide(false);
        }
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % (slides.length - slidesToShow + 1));
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + (slides.length - slidesToShow + 1)) % (slides.length - slidesToShow + 1));
    };

    const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setDragStartX(event.clientX);
    };

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const dragOffset = event.clientX - dragStartX;
        handleSlideChange(dragOffset);
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

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const getSlideWidth = () => {
        return 100 / slidesToShow + "%";
    };

    return (
        <div className={classes.slider}>
            <div
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleDragEnd}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleDragEnd}
                className={classes.slidesContainer}
                style={{ transform: `translateX(-${isCurrentSlide * (100 / slidesToShow)}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${classes.slide} ${index >= isCurrentSlide && index < isCurrentSlide + slidesToShow ? classes.active : ""}`}
                        style={{ flexBasis: getSlideWidth() }}
                    >
                        {slide}
                    </div>
                ))}
            </div>

            {
                baseButtons &&
                <div>
                    <button className={classes.prevButton} onClick={handlePrevSlide}>
                        Previous
                    </button>
                    <button className={classes.nextButton} onClick={handleNextSlide}>
                        Next
                    </button>
                </div>
            }
        </div>
    );
};
