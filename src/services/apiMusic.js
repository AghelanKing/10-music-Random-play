import { API_MUSIC } from "../utils/constans";

export async function getMusics() {
    const res = await fetch(API_MUSIC)
    const data = await res.json()

    return data
}