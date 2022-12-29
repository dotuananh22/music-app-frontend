/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { AppDispatch, IRootState } from "app/store";
import Artist from "components/Common/Artist";
import BreadCrumb from "components/Common/BreadCrumb";
import Pagination from "components/Common/Pagination";
import singerThunk from "features/singer/singerThunk";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import QueryInput from "types/QueryInput";
import Singer from "types/singer/Singer";
import SubNavBar from "./SubNavBar";

const Artists = () => {
  const dispatch = useDispatch<AppDispatch>();
  const singer = useSelector((state: IRootState) => state.singer);
  const [pagination, setPagination] = useState<QueryInput<Singer>>({
    limit: 12,
    skip: 0,
    sort: ["follower"],
    order: [-1],
  });

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(singerThunk.getAllSingers(pagination));
  }, [pagination.limit, pagination.skip, pagination.sort, dispatch]);

  const handlePagination = (page: number) => {
    setPagination({
      ...pagination,
      skip: (page - 1) * pagination.limit,
    });
    setCurrentPage(page);
  };

  const handleSort = (sort: keyof Singer) => {
    setPagination({
      ...pagination,
      sort: [sort],
      order: [-1],
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumb path="/" baseAddress="Home" mainAddress="Artists" />
      <div className="flex flex-col gap-8 mt-6">
        <h2 className="text-4xl text-white">Artists</h2>
        <SubNavBar handleSort={handleSort} sort={pagination.sort} />
        <div className="flex flex-col gap-4 items-center">
          <div className="grid grid-cols-6 gap-8">
            {singer.loading ? (
              <>
                <Skeleton height={"180px"} />
                <Skeleton height={"180px"} />
              </>
            ) : (
              singer.singers.map((singer) => (
                <Artist key={singer._id} id={singer._id} singer={singer} />
              ))
            )}
          </div>
          <Pagination
            totalPage={singer.pagination.totalPages}
            currentPage={currentPage}
            onPageChange={handlePagination}
          />
        </div>
      </div>
    </div>
  );
};

export default Artists;
