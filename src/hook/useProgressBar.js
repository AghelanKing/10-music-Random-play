import { useEffect } from "react";
import { TOTAL_WIDTH_PROGRESSBAR } from "../utils/constans";
import { useMusic } from "./useMusic";

export function useProgressBar(duration) {
    const {
        playMusic,
        time,
        reapet,
        currentSpeed,
        audioRef,
        dispatch,
    } = useMusic();

    const min = Math.floor(time / 60);
    const sec = time % 60;

    const minDuration = Math.floor(duration / 60);
    const secDuration = duration % 60;

    const addWidth = TOTAL_WIDTH_PROGRESSBAR / duration;

    useEffect(
        function () {
            const timer = setInterval(function () {
                if (playMusic) {
                    dispatch({ type: 'startProgress', payload: addWidth })
                } else clearInterval(timer);

                if (time >= duration - 1 && reapet) {
                    audioRef.current.currentTime = 0;
                    dispatch({ type: 'endProgress', payload: 'repeat' })
                    audioRef.current?.play();
                }

                if (time >= duration - 1 && !reapet) {
                    clearInterval(timer);
                    dispatch({ type: 'endProgress', payload: 'noRepeat' })
                }
            }, currentSpeed);

            return () => clearInterval(timer);
        },
        [
            playMusic,
            addWidth,
            duration,
            time,
            reapet,
            currentSpeed,
            audioRef,
            dispatch
        ],
    );

    return { min, sec, minDuration, secDuration }
}
