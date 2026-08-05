import { LuMusic } from "react-icons/lu";

import Buttons from "../../ui/Buttons";

function BackToMusicButton() {
  return (
    <Buttons to="/musics" type="favorite">
      <LuMusic className="text-xl rotate-23 text-teal-900" /> Back to musics
    </Buttons>
  );
}

export default BackToMusicButton;
