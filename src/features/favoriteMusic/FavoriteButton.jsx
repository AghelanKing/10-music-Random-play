import { HiHeart } from "react-icons/hi2";

import Buttons from "../../ui/Buttons";

function FavoriteButton() {
  return (
    <Buttons to="/musicsFavorite" type="favorite">
      <HiHeart className="text-2xl text-red-700" /> your favorite
    </Buttons>
  );
}

export default FavoriteButton;
