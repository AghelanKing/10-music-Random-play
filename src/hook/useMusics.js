import { useQuery } from "@tanstack/react-query";
import { getMusics } from "../services/apiMusic";

export function useMusics() {
    const { data: musics, isLoading } = useQuery({
        queryKey: ['musics'],
        queryFn: getMusics
    })

    return { musics, isLoading }
}