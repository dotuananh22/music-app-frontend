import Singer from "types/singer/Singer";

const joinSingers = (singers: (Singer | string)[]) => {
  if (typeof singers[0] === "string") {
    return singers.join(", ");
  }
  // @ts-ignore
  return singers.map((singer: Singer) => singer.nickname).join(", ");
};

export default joinSingers;
