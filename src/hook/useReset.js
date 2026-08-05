import { useEffect } from "react";
import { useMusic } from "./useMusic";

export function useReset() {
    const { dispatch } = useMusic();
    useEffect(
        function () {
            dispatch({ type: 'reset' })
        },
        [dispatch],
    );
}
