import { API_URL } from "@/shared";
import axios from "axios";

export async function getMainSlider() {
    try {
        const response = await axios.get(`${API_URL}main-sliders?populate=*`, { params: { next: { revalidate: 10 } } });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}
