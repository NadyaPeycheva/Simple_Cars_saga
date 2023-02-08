import { MenuItem, TableCell, TableRow, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";


const engineTypes = ["DIESEL", "HYBRID", "ELECTRIC", "GASOLINE"];
const conditions = ["USED", "NEW", "PARTS"];
const cities = ["Sofia", "Plovdiv", "Varna"];
const gearBox = ["AUTOMATIC", "MANUAL"];
const AdditionalRow=({carData,aceptAction,removeAction,getValueHandler})=>{
    return(
        <TableRow>
      <TableCell>
        <CheckIcon onClick={aceptAction} sx={{ fontSize: "21px" }} />
        <Close onClick={removeAction} sx={{ fontSize: "21px" }} />
      </TableCell>
      <TableCell>
        <TextField
          label="Make"
          variant="standard"
          name="make"
          defaultValue={carData.make}
          onChange={getValueHandler}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Model"
          variant="standard"
          name="model"
          defaultValue={carData.model}
          onChange={getValueHandler}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Year"
          variant="standard"
          type='number'
          name="year"
          defaultValue={carData.year}
          onChange={getValueHandler}
        />
      </TableCell>
      <TableCell>
        <TextField
          select
          variant="standard"
          name="engineType"
          defaultValue={carData.engineType}
          onChange={getValueHandler}
        >
          {engineTypes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField
          select
          variant="standard"
          name="gearBox"
          defaultValue={carData.gearBox}
          onChange={getValueHandler}
        >
          {gearBox.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField
          select
          variant="standard"
          name="condition"
          defaultValue={carData.condition}
          onChange={getValueHandler}
        >
          {conditions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField
          label="Horse Power"
          variant="standard"
          name="horsePower"
          type='number'
          defaultValue={carData.year}
          onChange={getValueHandler}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Color"
          variant="standard"
          name="color"
          defaultValue={carData.color}
          onChange={getValueHandler}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Price $"
          variant="standard"
          name="price"
          type='number'
          defaultValue={carData.price}
          onChange={getValueHandler}
        />
      </TableCell>
      <TableCell>
        <TextField
          select
          variant="standard"
          name="city"
          defaultValue={carData.city}
          onChange={getValueHandler}
        >
          {cities.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField
          label="Mileage"
          variant="standard"
          name="mileage"
          type='number'
          defaultValue={carData.mileage}
          onChange={getValueHandler}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Extras"
          variant="standard"
          name="extras"
          defaultValue={carData.extras}
          onChange={getValueHandler}
        />
      </TableCell>
    </TableRow>
    );
}
export default AdditionalRow;