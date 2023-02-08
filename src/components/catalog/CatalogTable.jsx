import { TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Table } from "@mui/material";
import TBody from "./TableBody";
import TFooter from "./TableFooter";
import THead from "./TableHead";

import SearchRow from "../searchRow/SearchRow";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CatalogTable = () => {
  const allCars = useSelector((state) => state.getAllCarsReducer);
  const user=useSelector((state)=>state.loginUserReducer);
  const [filterCars, setFilterCars] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    setFilterCars(allCars);
  },[allCars]);
  const filterCarsHandler = (inputValue) => {
    const filteredCars = allCars.filter((car) => {
      return (
        car.make.toLowerCase().includes(inputValue.toLowerCase()) ||
        car.model.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    setFilterCars(filteredCars);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <SearchRow username={user.username} onFilterCars={filterCarsHandler} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <THead username={user.username}/>
          <TBody user={user} cars={filterCars} rowsPerPage={rowsPerPage} page={page} />
          <TFooter
            cars={allCars}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </Table>
      </TableContainer>
    </>
  );
};
export default CatalogTable;
