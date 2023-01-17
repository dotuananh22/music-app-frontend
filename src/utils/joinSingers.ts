import Singer from "types/singer/Singer";

const joinSingers = (singers: (Singer | string)[]) => {
  if (typeof singers[0] === "string") {
    return singers.join(", ");
  }

  return (
    singers
      // @ts-ignore
      .map((singer: Singer) => singer.nickname)
      .join(", ")
  );
};

export default joinSingers;
