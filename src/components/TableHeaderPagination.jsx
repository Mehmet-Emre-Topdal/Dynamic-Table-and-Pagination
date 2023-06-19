import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TableHeaderPagination = (props) => {
  const { totalPageCount, pageIndex, goNextPage, goPreviousPage } = props;

  return (
    <div className="flex-end">
      <div className="flex-end">
        {pageIndex !== 1 && (
          <button onClick={goPreviousPage}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )}

        <p>{pageIndex}</p>
        <p>/</p>
        <p>{totalPageCount}</p>

        {pageIndex !== totalPageCount && (
          <button onClick={goNextPage}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TableHeaderPagination;
