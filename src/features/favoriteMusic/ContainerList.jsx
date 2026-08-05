import BackToMusicButton from "./BackToMusicButton";
import FavoriteList from "./FavoriteList";

function ContainerList() {
  const NumFavorites = JSON.parse(
    localStorage.getItem("musicsFavorite"),
  )?.length;

  return (
    <>
      <BackToMusicButton />
      <div className="w-100 h-[80%] bg-mist-300/45 rounded-xl border-2 border-mist-200 flex flex-col p-5">
        {!NumFavorites ? (
          <p className="text-center my-auto text-xl italic text-teal-900/70">
            No more item!
          </p>
        ) : (
          <FavoriteList />
        )}
      </div>
    </>
  );
}

export default ContainerList;
