/* eslint-disable jsx-a11y/anchor-is-valid */
import Music from "components/Common/Music";
import Pagination from "components/Common/Pagination";
import { setListChosenSong } from "features/song/songSlice";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import PaginationResponse from "types/PaginationResponse";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";

interface ReleasesProps {
  songs: Song<Singer>[];
  pagination: PaginationResponse;
  setPage: (page: number) => void;
  loading: boolean;
}

const Releases = (props: ReleasesProps) => {
  const dispatch = useDispatch();
  const handlePlayMusic = (index: number) => {
    dispatch(
      setListChosenSong({
        indexListChosenSong: index,
        listChosenSong: props.songs,
      })
    );
  };
  return (
    <div className="flex flex-col gap-10 mt-6 pt-4 border-t border-[#222227]">
      <div className="flex flex-col gap-8 mt-2">
        <h2 className="text-4xl text-white">Releases</h2>
        <div className="flex flex-col gap-4 items-center">
          <div className="grid grid-cols-6 gap-8">
            {props.loading ? (
              <>
                <Skeleton height={"170px"} width={"170px"} />
                <Skeleton height={"170px"} width={"170px"} />
                <Skeleton height={"170px"} width={"170px"} />
                <Skeleton height={"170px"} width={"170px"} />
                <Skeleton height={"170px"} width={"170px"} />
                <Skeleton height={"170px"} width={"170px"} />
                <Skeleton height={"170px"} width={"170px"} />
                <Skeleton height={"170px"} width={"170px"} />
                <Skeleton height={"170px"} width={"170px"} />
                <Skeleton height={"170px"} width={"170px"} />
                <Skeleton height={"170px"} width={"170px"} />
                <Skeleton height={"170px"} width={"170px"} />
              </>
            ) : (
              props.songs.map((song, index) => (
                <Music
                  song={song}
                  id={song._id}
                  index={index}
                  key={index}
                  handlePlayMusic={handlePlayMusic}
                />
              ))
            )}
          </div>
          <Pagination
            currentPage={props.pagination.page}
            totalPage={props.pagination.totalPages}
            onPageChange={props.setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Releases;
