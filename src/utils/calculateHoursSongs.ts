import Singer from "types/singer/Singer";
import Song from "types/song/Song";

const calculateHoursSongs = (
  songs: Song<Singer | string>[] | null | undefined
) => {
  if (!songs) return "0s";
  let total = 0;
  songs.forEach((song) => {
    total += song.songTime;
  });

  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = Math.floor((total % 3600) % 60);

  if (hours === 0 && minutes === 0) return `${seconds}s`;
  if (hours === 0) return `${minutes}m ${seconds}s`;

  return `${hours}h ${minutes}m ${seconds}s`;
};

export default calculateHoursSongs;
