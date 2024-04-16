import React, { useContext } from "react";
import { AiOutlineSortAscending } from "react-icons/ai";
import { TbSortDescendingLetters } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useTable, useSortBy, usePagination } from "react-table";
import UserContext from "../../src/context/user/UserContex";
const Table = ({ columns, data, item = 5, typeOfTable = "product" }) => {
  const { deleteUser } = useContext(UserContext);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageCount,
    state: { pageIndex },
  } = useTable(
    { columns, data, initialState: { pageSize: item } },
    useSortBy,
    usePagination
  );
  return (
    <>
      <table {...getTableProps()} className=" w-full  bg-white rounded-lg">
        <thead className=" h-[8vh]">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <p className="flex items-center justify-center gap-2">
                    {column.render("Header")}
                    {column.isSorted && (
                      <span>
                        {column.isSortedDesc ? (
                          <TbSortDescendingLetters />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    )}
                  </p>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className=" border-t-[1px] border-pink-600 text-center"
                    >
                      {cell.column.id === "image" ||
                      cell.column.Header === "image" ? (
                        <img
                          src={
                            cell.value ??
                            "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                          }
                          alt="image"
                          className={
                            typeOfTable != "user"
                              ? "relative size-14 rounded-md left-1/3"
                              : "relative size-12 rounded-full left-1/3"
                          }
                        />
                      ) : cell.column.Header === "Manage" &&
                        cell.column.id === "_id" ? (
                        <NavLink
                          className="text-blue-600"
                          to={`/admin/product/manage/${cell.value}`}
                        >
                          {" "}
                          {cell.column.Header}
                        </NavLink>
                      ) : cell.column.Header === "Manage" &&
                        cell.column.id === "orderProductIds[0]._id" ? (
                        <NavLink
                          className="text-blue-600"
                          to={`/admin/transaction/${cell.value}`}
                        >
                          {cell.column.Header}
                        </NavLink>
                      ) : cell.column.Header === "view" &&
                        cell.column.id === "_id" ? (
                        <NavLink
                          className="text-blue-600"
                          to={`/vieworder/${cell.value}`}
                        >
                          {cell.column.Header}
                        </NavLink>
                      ) : cell.column.Header === "Delete" &&
                        cell.column.id === "_id" ? (
                        <button className="text-red-500">delete</button>
                      ) : cell.column.id === "isAdmin" ? (
                        cell.value ? (
                          "adime"
                        ) : (
                          "user"
                        )
                      ) : (
                        cell.render("Cell")
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex gap-5 items-center justify-center mt-2">
        <button
          disabled={!canPreviousPage}
          onClick={previousPage}
          className="px-3 text-center font-semibold pb-1 text-white bg-blue-500 rounded-lg"
        >
          previous
        </button>
        <span>
          {pageIndex + 1} of {pageCount}
        </span>
        <button
          disabled={!canNextPage}
          onClick={nextPage}
          className="px-3 text-center font-semibold pb-1 text-white bg-blue-500 rounded-lg"
        >
          next
        </button>
      </div>
    </>
  );
};

export default Table;
