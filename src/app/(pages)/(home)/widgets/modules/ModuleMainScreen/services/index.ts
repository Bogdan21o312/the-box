import axios from "axios";
import {Response} from "./type";

export async function getMainSlider(): Promise<Response> {
    try {
        const response = await fetch(`http://localhost:1337/api/main-sliders?populate=*`, { next: { revalidate: 10 } });
        return response.json();
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}
