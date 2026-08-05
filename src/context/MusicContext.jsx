import { createContext, useCallback, useReducer, useRef } from "react";
import { Vibrant } from "node-vibrant/browser";

const MusicContext = createContext();

const initialState = {
  colorTheme: "",
  playMusic: false,
  reapet: false,
  currentMusic: 0,
  time: 0,
  widthProgressBar: 0,
  speed: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "setColorTheme":
      return { ...state, colorTheme: action.payload };
    case "playMusic":
      return { ...state, playMusic: !state.playMusic };
    case "ReplaceMusic":
      return {
        ...state,
        currentMusic:
          action.payload === "prev"
            ? state.currentMusic - 1
            : state.currentMusic + 1,
        playMusic: false,
        time: 0,
        widthProgressBar: 0,
      };
    case "setReapet":
      return { ...state, reapet: !state.reapet };
    case "setSpeed":
      return { ...state, speed: action.payload };
    case "newProgress":
      return {
        ...state,
        time: action.payload.newTime,
        widthProgressBar: action.payload.newWidth,
      };
    case "startProgress":
      return {
        ...state,
        time: state.time + 1,
        widthProgressBar: state.widthProgressBar + action.payload,
      };
    case "endProgress":
      return {
        ...state,
        time: 0,
        widthProgressBar: 0,
        playMusic: action.payload === "repeat",
      };
    case "reset":
      return {
        ...state,
        time: 0,
        widthProgressBar: 0,
        playMusic: false,
        reapet: false,
        speed: 1,
      };
    default:
      throw new Error("Action unknown!");
  }
}

function MusicProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    colorTheme,
    playMusic,
    reapet,
    currentMusic,
    time,
    widthProgressBar,
    speed,
  } = state;

  const audioRef = useRef();
  const imgRef = useRef();

  const foundColorTheme = useCallback(async (imgUrl) => {
    if (!imgUrl) return;

    const palette = await Vibrant.from(imgUrl).getPalette();

    dispatch({ type: "setColorTheme", payload: palette });
  }, []);

  let currentSpeed;
  if (speed === 0.5) currentSpeed = 2000;
  if (speed === 1) currentSpeed = 1000;
  if (speed === 2) currentSpeed = 500;
  if (speed === 3) currentSpeed = 333.33;

  return (
    <MusicContext.Provider
      value={{
        currentSpeed,
        colorTheme,
        foundColorTheme,
        playMusic,
        currentMusic,
        time,
        widthProgressBar,
        reapet,
        speed,
        audioRef,
        imgRef,
        dispatch,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

// eslint.disabeld

export { MusicProvider, MusicContext };
