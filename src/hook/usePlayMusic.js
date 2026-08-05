import { useEffect } from "react";
import { useMusic } from "./useMusic";

export function usePlayMusic() {
    const { playMusic, speed, audioRef } = useMusic();

    useEffect(
        function () {
            if (playMusic) {
                audioRef.current?.play();
                audioRef.current.playbackRate = speed;
            } else audioRef.current.pause();
        },
        [playMusic, speed, audioRef],
    );
}
