import { useParams } from "react-router";
import { memo, useMemo } from "react";

import { useReset } from "../../hook/useReset";
import { useFoundColorTheme } from "../../hook/useFoundColorTheme";

import MusicDetails from "../player/MusicDetails";
import ExtraButtons from "../player/ExtraButtons";
import ProgressBar from "../player/ProgressBar";
import ButtonsPlay from "../player/ButtonsPlay";
import FavoriteButton from "./FavoriteButton";
import BackToMusicButton from "./BackToMusicButton";

const ContainerPlayerFavorite = memo(function ContainerPlayerFavorite() {
  const { musicId } = useParams();

  const favorites = useMemo(
    () => JSON.parse(localStorage.getItem("musicsFavorite")) ?? [],
    [],
  );

  const selectedMusic = useMemo(
    () => favorites.find((favorite) => favorite.id === musicId),
    [favorites, musicId],
  );

  useFoundColorTheme(selectedMusic, selectedMusic?.image);

  useReset();

  return (
    <>
      <div className="flex gap-x-3">
        <FavoriteButton />
        <BackToMusicButton />
      </div>
      <div className="w-100 h-[80%] bg-mist-300/45 rounded-xl border-2 border-mist-200 flex flex-col items-center justify-center">
        <MusicDetails music={selectedMusic} />
        <ExtraButtons
          downloadAudio={selectedMusic?.audiodownload}
          favoriteMusic={selectedMusic}
        />
        <div className="flex flex-col gap-y-9 items-center">
          <ProgressBar duration={selectedMusic?.duration} />
          <ButtonsPlay
            audio={selectedMusic?.audio}
            numMusics={selectedMusic.length - 1}
          />
        </div>
      </div>
    </>
  );
});

export default ContainerPlayerFavorite;
