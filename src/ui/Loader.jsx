import { LuMusic } from "react-icons/lu";

function Loader() {
  return (
    <div className="motion-safe:animate-spin bg-transparent border-2 border-teal-700 rounded-full p-3">
      <LuMusic className="text-[55px] text-teal-700" />
    </div>
  );
}

export default Loader;
