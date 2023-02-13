import { TableBody, TableCell, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import AddCarRow from "../addCarRow/AddCarRow";
import TRow from "./TableRow";

const TBody = ({user,cars,rowsPerPage,page}) => {
  const isVisible=useSelector((state)=>state.visibleRowReducer);
  
  return (
    <TableBody>
      {cars.length===0&&<TableRow ><TableCell sx={{ textAlign: "center", padding: '110px' }} colSpan="13">No records to display</TableCell></TableRow>}
      {(rowsPerPage > 0
            ? cars.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : cars
          ).map((car) => (<TRow key={car.id} user={user} car={car}/>))}

      {isVisible&&<AddCarRow user={user}/>}
    </TableBody>
  );
};
export default TBody;
