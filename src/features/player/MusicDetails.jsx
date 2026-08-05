import { useMusic } from "../../hook/useMusic";

function MusicDetails({ music = {} }) {
  const { imgRef } = useMusic();
  const { id, album_name, artist_name, image, name } = music;

  const styleSpan = "text-sm text-stone-600";

  return (
    <div className="flex flex-col items-center">
      <img
        src={image || "defaultMusicCover.jpg"}
        key={id}
        alt={`image of ${name}`}
        className="w-60 rounded-xl"
        ref={imgRef}
      />
      <h3 className="mt-4 text-2xl font-semibold text-center">{name}</h3>
      <div className="flex gap-2.5 mt-2">
        <span className={styleSpan}>{artist_name},</span>
        <span className={styleSpan}>{album_name}</span>
      </div>
    </div>
  );
}

export default MusicDetails;
