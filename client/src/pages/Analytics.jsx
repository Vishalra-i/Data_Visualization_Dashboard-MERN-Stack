import React from 'react';
import { useSelector } from 'react-redux';
import { useTable, usePagination } from 'react-table';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const TableComponent = () => {
  const { storeData } = useSelector(state => state.server);
  const navigate = useNavigate();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Topic',
        accessor: 'topic'
      },
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'Published',
        accessor: 'published'
      },
      {
        Header: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Region',
        accessor: 'region'
      },
      {
        Header: 'Sector',
        accessor: 'sector'
      },
      {
        Header: 'Insight',
        accessor: 'insight'
      },
      {
        Header: 'Likelihood',
        accessor: 'likelihood'
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex }
  } = useTable(
    {
      columns,
      data: storeData,
      initialState: { pageIndex: 0, pageSize: 10 }
    },
    usePagination
  );

  const handleRowClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="container mx-auto  p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table {...getTableProps()} className="min-w-full bg-white">
          <thead className="bg-yellow-300">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
            {page.map(row => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="hover:bg-gray-50 cursor-pointer relative"
                  onClick={() => handleRowClick(row.original._id)}
                >
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="px-6 py-4 text-sm text-gray-700">
                      {cell.render('Cell')}
                    </td>
                  ))}
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-800 bg-opacity-60 text-white text-xs font-medium transition-opacity duration-300">
                    Click for more details
                  </span>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
        <p>{storeData.length || 0}</p>
      <div className="pagination mt-4 flex justify-center">
        <ReactPaginate
          pageCount={pageOptions.length}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          onPageChange={({ selected }) => gotoPage(selected)}
          previousLabel="Previous"
          nextLabel="Next"
          containerClassName="flex justify-center space-x-2 mt-4"
          pageClassName="border rounded px-2 py-1"
          activeClassName="bg-blue-500 text-white"
          previousClassName="border rounded px-2 py-1"
          nextClassName="border rounded px-2 py-1"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </div>
  );
};

export default TableComponent;
