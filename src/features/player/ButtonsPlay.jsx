import { HiPauseCircle, HiPlayCircle } from "react-icons/hi2";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";

import { useMusic } from "../../hook/useMusic";
import { usePlayMusic } from "../../hook/usePlayMusic";

import Buttons from "../../ui/Buttons";

function ButtonsPlay({ audio, numMusics }) {
  const { currentMusic, playMusic, audioRef, dispatch } = useMusic();

  function handlePlay() {
    if (!audio) return;
    dispatch({ type: "playMusic" });
  }

  function handleBack() {
    if (currentMusic <= 0) return;
    dispatch({ type: "ReplaceMusic", payload: "prev" });
  }

  function handleForward() {
    if (currentMusic >= numMusics) return;
    dispatch({ type: "ReplaceMusic", payload: "next" });
  }

  usePlayMusic();

  return (
    <div className="flex justify-around w-3/4">
      <Buttons onClick={handleBack} type="prevNext">
        <IoPlaySkipBack />
      </Buttons>
      <Buttons type="play" onClick={handlePlay}>
        {playMusic ? <HiPauseCircle /> : <HiPlayCircle />}
        <audio ref={audioRef} src={audio}></audio>
      </Buttons>
      <Buttons onClick={handleForward} type="prevNext">
        <IoPlaySkipForward />
      </Buttons>
    </div>
  );
}

export default ButtonsPlay;
