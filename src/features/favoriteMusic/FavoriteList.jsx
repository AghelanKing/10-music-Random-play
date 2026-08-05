import { useFoundColorTheme } from "../../hook/useFoundColorTheme";

import FavoriteItem from "./FavoriteItem";

function FavoriteList() {
  const musicsFavorite = JSON.parse(localStorage.getItem("musicsFavorite"));

  useFoundColorTheme(musicsFavorite, musicsFavorite[0]?.image);

  return (
    <ul className="flex flex-col divide-solid divide-stone-500 divide-y">
      {musicsFavorite?.map((music) => (
        <FavoriteItem music={music} key={music.id} />
      ))}
    </ul>
  );
}

export default FavoriteList;
