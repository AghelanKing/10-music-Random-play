import { Outlet } from "react-router";
import { useMusic } from "../hook/useMusic";

function AppLayout() {
  const { colorTheme } = useMusic();
  return (
    <main
      style={{
        background: `linear-gradient(to bottom , ${colorTheme.Vibrant?.hex},${colorTheme.DarkMuted?.hex})`,
      }}
      className={`w-full gap-y-3 h-full flex flex-col items-center justify-center bg-teal-800/80`}
    >
      <Outlet />
    </main>
  );
}

export default AppLayout;
