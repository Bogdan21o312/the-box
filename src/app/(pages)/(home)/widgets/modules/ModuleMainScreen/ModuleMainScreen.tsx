"use client"

import {useState} from "react";

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
export const ModuleMainScreen = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const dragOffset = e.clientX - dragStartX;
        if (dragOffset > 100) {
            handlePrevSlide();
            setIsDragging(false);
        } else if (dragOffset < -100) {
            handleNextSlide();
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="slider" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <div className="slides-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? "active" : ""} ${index < currentSlide ? "left" : ""} ${index > currentSlide ? "right" : ""}`}
                    >
                        {slide.title}
                    </div>
                ))}
            </div>

            <button className="prev-button" onClick={handlePrevSlide}>
                Previous
            </button>
            <button className="next-button" onClick={handleNextSlide}>
                Next
            </button>

            <style jsx>{`
        .slider {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        .slides-container {
          display: flex;
          transition: all 0.6s ease;
          transform: translateX(-${currentSlide * 100}%);
        }

        .slide {
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f1f1f1;
          font-size: 24px;
          color: #333;
          transition: all 0.6s ease;
        }

        .slide.active {
          background-color: #ddd;
        }

        .slide.left {
          transform: translateX(-100%);
        }

        .slide.right {
          transform: translateX(100%);
        }

        .prev-button,
        .next-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          padding: 8px 16px;
          background-color: #333;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .prev-button {
          left: 16px;
        }

        .next-button {
          right: 16px;
        }
      `}</style>
        </div>
    );
};
