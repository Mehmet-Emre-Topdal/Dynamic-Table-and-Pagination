import { useEffect, useState } from "react";
import DynamicTable from "./DynamicTable";
import TableHeaderPagination from "./TableHeaderPagination";


const PaginatedTable = (props) => {
  const [pageSize, setPageSize] = useState(25);
  const [pageIndex, setPageIndex] = useState(1);

  const { dataArray } = props;
  const totalCount = dataArray ? dataArray.length : 0;
  const totalPageCount =
  totalCount !== 0 ? Math.ceil(totalCount / pageSize) : 0;

  useEffect(() => {
    setPageIndex(1)
  },[dataArray])
  
  const goNextPage = () => {
    setPageIndex((page) => page + 1);
  };
  const goPreviousPage = () => {
    setPageIndex((page) => page - 1);
  };

  const startIndex = (pageIndex - 1) * pageSize;
const endIndex = startIndex + pageSize;

const pageItems = dataArray?.filter((item, index) => {
  return index >= startIndex && index < endIndex;
});

  let result;
  result = dataArray ? <DynamicTable jsonArray={pageItems}/> : <p>no data</p>
  return (
    <div>
      <div className="flex-space-between">
        <div className="center gap-3">

          <h5>Results</h5>

          <div>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(e.target.value);
              }}

            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            items per page
          </div>
        </div>

        {totalCount !== 0 && dataArray && (
          <TableHeaderPagination
            pageIndex={pageIndex}
            totalPageCount={totalPageCount}
            goNextPage={goNextPage}
            goPreviousPage={goPreviousPage}
          />
        )}
      </div>
       
       {result}
    </div>
  );
};

export default PaginatedTable;
