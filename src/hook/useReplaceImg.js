import { useEffect } from "react";
import { useMusic } from "./useMusic";

export function useReplaceImg(imgUrl) {
    const { imgRef } = useMusic();

    useEffect(
        function () {
            imgRef.current?.setAttribute("src", "defaultMusicCover.jpg");
            imgRef.current?.addEventListener("load", function () {
                imgRef.current?.setAttribute("src", imgUrl);
            });
        },
        [imgUrl, imgRef],
    );
}
