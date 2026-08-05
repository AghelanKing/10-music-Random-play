import { useMusic } from "../../hook/useMusic";
import { TOTAL_WIDTH_PROGRESSBAR } from "../../utils/constans";
import { useProgressBar } from "../../hook/useProgressBar";

function ProgressBar({ duration }) {
  const { colorTheme, widthProgressBar, audioRef, dispatch } = useMusic();

  const { min, sec, minDuration, secDuration } = useProgressBar(duration);

  function handleClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    const newTime = Math.floor(percent * duration);
    const newWidth = percent * TOTAL_WIDTH_PROGRESSBAR;

    dispatch({
      type: "newProgress",
      payload: {
        newTime: newTime,
        newWidth: newWidth,
      },
    });
    audioRef.current.currentTime = newTime;
  }

  const styleSpan = "text-stone-700 font-['sono']";
  return (
    <div>
      <div className="flex justify-between w-87.5">
        <span className={styleSpan}>
          {min}:{`${sec}`.padStart(2, 0)}
        </span>
        <span className={styleSpan}>
          {minDuration}:{`${secDuration}`.padStart(2, 0)}
        </span>
      </div>
      <div
        onClick={handleClick}
        className="w-87.5  h-2 cursor-pointer  bg-stone-300 rounded-full overflow-hidden"
      >
        <div
          style={{
            backgroundColor: colorTheme?.Vibrant?.hex,
            width: `${widthProgressBar}px`,
          }}
          className="h-full"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
