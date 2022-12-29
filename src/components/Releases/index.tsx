/* eslint-disable jsx-a11y/anchor-is-valid */
import Music from "components/Common/Music";
import BreadCrumb from "components/Common/BreadCrumb";
import Pagination from "components/Common/Pagination";
import React, { useEffect, useState } from "react";
import SubNavBar from "components/Common/SubNavBar";
import NewSingles from "./NewSingles";
import { useDispatch, useSelector } from "react-redux";
import songThunk from "features/song/songThunk";
import { AppDispatch, IRootState } from "app/store";
import Skeleton from "react-loading-skeleton";
import Song from "types/song/Song";
import QueryInput from "types/QueryInput";
import SongType from "types/song/SongType";

const Releases = () => {
  const dispatch = useDispatch<AppDispatch>();
  const song = useSelector((state: IRootState) => state.song);
  const [currentPage, setCurrentPage] = useState(1);

  const [pagination, setPagination] = useState<QueryInput<Song<string>>>({
    limit: 12,
    skip: 0,
    sort: ["likes"],
    order: [-1],
  });

  useEffect(() => {
    dispatch(
      songThunk.getAllSongs({
        query: pagination,
        type: SongType.ALL,
      })
    );
  }, [pagination.skip, pagination.sort, pagination.order]);

  const handlePagination = (page: number) => {
    setPagination({
      ...pagination,
      skip: (page - 1) * pagination.limit,
    });
    setCurrentPage(page);
  };

  const handleSort = (sort: keyof Song<string>) => {
    setPagination({
      ...pagination,
      sort: [sort],
      order: [-1],
    });
  };
  return (
    <div className="flex flex-col gap-6">
      <BreadCrumb path="/" baseAddress="Home" mainAddress="Releases" />
      <div className="flex flex-col gap-8 mt-6">
        <h2 className="text-4xl text-white">Releases</h2>
        <SubNavBar handleSort={handleSort} sort={pagination.sort} />
        <div className="flex flex-col gap-4 items-center">
          <div className="grid grid-cols-6 gap-8">
            {song.loading.getAllSongs ? (
              <>
                <Skeleton height={"200px"} />
                <Skeleton height={"200px"} />
                <Skeleton height={"200px"} />
              </>
            ) : (
              song.songs.allSongs.map((song) => (
                <Music key={song._id} id={song._id} song={song} />
              ))
            )}
            {/* <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music /> */}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPage={song.pagination.totalPages}
            onPageChange={handlePagination}
            key={1}
          />
        </div>
      </div>
      <NewSingles />
    </div>
  );
};

export default Releases;
