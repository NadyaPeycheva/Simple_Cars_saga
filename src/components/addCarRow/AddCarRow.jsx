import { useDispatch } from "react-redux";
import { invisibleAddRow } from "./visibleAddCarRowAction";
import { useState } from "react";
import { addCar } from "../catalog/carActions";
import AdditionalRow from "../../common/AdditionalRow";

const initialData = {
  id: "",
  make: "",
  model: "",
  year: "",
  engineType: "",
  gearBox: "",
  condition: "",
  horsePower: "",
  color: "",
  price: "",
  city: "",
  mileage: "",
  extras: "",
};

const AddCarRow = ({ user }) => {
  const dispatch = useDispatch();

  const [inputCarData, setInputCarData] = useState(initialData);

  const removeRowHandler = () => {
    dispatch(invisibleAddRow());
  };

  const getValueHandler = (e) => {
    const newProp = {};
    const key = e.target.name;
    const value = e.target.value;
    newProp[key] = value;

    setInputCarData((state) => {
      return { ...state, ...newProp };
    });
  };

  const addCarHandler = () => {
    const userData = {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
    };
    inputCarData.id = user.id;
    inputCarData.user = userData;
    dispatch(addCar(inputCarData, user.token));
    setInputCarData(initialData);
  };

  return (
    <AdditionalRow
      carData={inputCarData}
      aceptAction={addCarHandler}
      removeAction={removeRowHandler}
      getValueHandler={getValueHandler}
    />
  );
};
export default AddCarRow;
