import { useState } from "react";
import { useDispatch } from "react-redux";
import AdditionalRow from "../../common/AdditionalRow";
import { changeCar } from "../catalog/carActions";

const ChangeRow = ({ car,userId,token,changeCarRowUnvisible }) => {
    const dispatch=useDispatch()
  const [changeCarData, setChangeCar] = useState(car);

  const removeRowHandler = () => {
    changeCarRowUnvisible()
  }; 

  const getValueHandler = (e) => {
    const newProp = {};
    const key = e.target.name;
    const value = e.target.value;
    newProp[key] = value;

    setChangeCar((state) => {
      return { ...state, ...newProp };
    });
  };

  const changeCarHandler=()=>{
    dispatch(changeCar(changeCarData,userId,token));

  }
  return (
    <AdditionalRow carData={changeCarData} aceptAction={changeCarHandler} removeAction={removeRowHandler} getValueHandler={getValueHandler}/>
  );
};
export default ChangeRow;
