import { Link } from "react-router";
import { useMusic } from "../hook/useMusic";

function Buttons({ type, onClick, disabeld = false, children, to }) {
  const { colorTheme } = useMusic();
  const styledButton = {
    play: `text-[70px] cursor-pointer`,
    prevNext: `text-[30px] cursor-pointer opacity-70`,
    download: "text-[24px] cursor-pointer text-stone-100",
    repeat: "text-[24px] cursor-pointer text-stone-100 active:rotate-359",
    heart: "text-[24px] cursor-pointer text-white",
    delete:
      "bg-red-800 text-red-50 p-1 rounded-full hover:bg-red-950 focus:outline-2 focus:outline-red-700 focus:outline-offset-1 cursor-pointer",
    favorite:
      " bg-mist-300/55 p-3 rounded-full border-2 cursor-pointer border-mist-200 flex items-enter gap-2",
  };

  const color = {
    color:
      type === "prevNext"
        ? colorTheme?.DarkVibrant?.hex
        : colorTheme?.DarkMuted?.hex,
  };

  if (to)
    return (
      <Link className={styledButton[type]} to={to}>
        {children}
      </Link>
    );

  if (!to)
    return (
      <button
        onClick={onClick}
        className={styledButton[type]}
        disabled={disabeld}
        style={color}
      >
        {children}
      </button>
    );
}

export default Buttons;
