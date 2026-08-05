import { useMusics } from "../../hook/useMusics";
import { useMusic } from "../../hook/useMusic";
import { useFoundColorTheme } from "../../hook/useFoundColorTheme";
import { useReset } from "../../hook/useReset";
import { useReplaceImg } from "../../hook/useReplaceImg";

import MusicDetails from "./MusicDetails";
import ProgressBar from "./ProgressBar";
import ButtonsPlay from "./ButtonsPlay";
import ExtraButtons from "./ExtraButtons";
import Loader from "../../ui/Loader";
import FavoriteButton from "../favoriteMusic/FavoriteButton";

function ContainerPlayer() {
  const { musics, isLoading } = useMusics();

  const musicDetails = musics?.results;

  const { currentMusic } = useMusic();

  useFoundColorTheme(musics, musicDetails?.at(currentMusic)?.image);

  useReset();

  useReplaceImg(musicDetails?.at(currentMusic)?.image);

  return (
    <>
      <FavoriteButton />
      <div className="w-100 h-[80%] bg-mist-300/45 rounded-xl border-2 border-mist-200 flex flex-col items-center justify-center p-10">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <MusicDetails music={musicDetails?.at(currentMusic)} />
            <ExtraButtons
              downloadAudio={musicDetails?.at(currentMusic)?.audiodownload}
              favoriteMusic={musicDetails?.at(currentMusic)}
            />
            <div className="flex flex-col gap-y-9 items-center">
              <ProgressBar
                duration={musicDetails?.at(currentMusic)?.duration}
              />
              <ButtonsPlay
                audio={musicDetails?.at(currentMusic)?.audio}
                numMusics={musics?.results?.length - 1}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ContainerPlayer;
