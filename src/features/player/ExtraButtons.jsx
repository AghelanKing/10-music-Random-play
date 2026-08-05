import { FaDownload } from "react-icons/fa6";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { TbRepeat, TbRepeatOff } from "react-icons/tb";

import { useMusic } from "../../hook/useMusic";
import { useLocalStorage } from "../../hook/useLocalStorage";

import Buttons from "../../ui/Buttons";

function ExtraButtons({ downloadAudio, favoriteMusic }) {
  const { reapet, colorTheme, speed, dispatch } = useMusic();

  const { value: favorites, setValue: setFavorite } = useLocalStorage(
    [],
    "musicsFavorite",
  );

  const isFavorite = favorites?.some(
    (favorite) => favorite.id === favoriteMusic.id,
  );

  return (
    <div className="mt-6 flex gap-x-3">
      <a href={downloadAudio}>
        <Buttons type="download">
          <FaDownload className="text-2xl" />
        </Buttons>
      </a>
      <Buttons
        type="heart"
        onClick={() => setFavorite((favorite) => [...favorite, favoriteMusic])}
        disabeld={isFavorite}
      >
        {isFavorite ? (
          <HiHeart className="text-2xl text-red-700 animate-bounce" />
        ) : (
          <HiOutlineHeart />
        )}
      </Buttons>
      <Buttons type="repeat" onClick={() => dispatch({ type: "setReapet" })}>
        {!reapet ? <TbRepeatOff /> : <TbRepeat />}
      </Buttons>
      <select
        value={speed}
        style={{ backgroundColor: colorTheme?.DarkMuted?.hex }}
        className="text-white rounded-full px-2 py-1.5"
        onChange={(e) =>
          dispatch({ type: "setSpeed", payload: +e.target.value })
        }
      >
        <option value={0.5}>0.5x</option>
        <option value={1}>1x</option>
        <option value={2}>2x</option>
        <option value={3}>3x</option>
      </select>
    </div>
  );
}

export default ExtraButtons;
