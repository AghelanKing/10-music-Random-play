import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

export function useMusic() {
    const context = useContext(MusicContext);
    if (!context)
        throw new Error("MusicContext was used outside MusicProvider");
    return context;
}