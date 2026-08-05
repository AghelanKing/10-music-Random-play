import { useEffect } from "react";
import { useMusic } from "./useMusic";

export function useFoundColorTheme(obj, imgUrl) {
    const { foundColorTheme } = useMusic();

    useEffect(
        function () {
            if (obj) foundColorTheme(imgUrl);
        },
        [obj, imgUrl, foundColorTheme],
    );
}
