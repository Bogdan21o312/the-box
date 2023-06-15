"use client"
import {EntitySlider} from "@/entites";
import {useState} from "react";

export const ModuleMainScreen = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div>
            <EntitySlider currentSlideCustom={currentSlide} setCurrentSlideCustom={setCurrentSlide}>
                <div>slide 1</div>
                <div>slide 2</div>
                <div>slide 3</div>
                <div>slide 4</div>
                <div>slide 5</div>
            </EntitySlider>
            <button>
                Previous
            </button>
            <button>
                Next
            </button>
        </div>
    );
};
