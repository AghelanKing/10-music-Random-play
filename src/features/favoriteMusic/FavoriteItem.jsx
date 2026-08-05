import { IoClose } from "react-icons/io5";
import { Link } from "react-router";

import Buttons from "../../ui/Buttons";

function FavoriteItem({ music }) {
  const favorites = JSON.parse(localStorage.getItem("musicsFavorite"));

  const { id, image, name, artist_name, album_name } = music;

  function handleClick(e) {
    e.preventDefault();
    const filteredFavorite = favorites.filter((favorite) => favorite.id !== id);
    localStorage.setItem("musicsFavorite", JSON.stringify(filteredFavorite));
  }

  const paragraphStyle = "text-xs text-stone-700";

  return (
    <li>
      <Link
        to={`/musicsFavorite/${id}`}
        className="py-3 px-2 flex items-center gap-x-3 justify-between w-full cursor-pointer hover:bg-stone-300/45"
      >
        <img src={image} alt={`image of ${name}`} className="w-12" />
        <h5 className="text-[15px]">{name}</h5>
        <div>
          <p className={paragraphStyle}>{artist_name}, </p>
          <p className={paragraphStyle}>{album_name}</p>
        </div>
        <Buttons onClick={handleClick} type="delete">
          <IoClose className="text-red-100" />
        </Buttons>
      </Link>
    </li>
  );
}

export default FavoriteItem;
