import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatalogTable from "../components/catalog/CatalogTable";
import { getCars } from "../components/catalog/carActions";
import Header from "../components/header/Header";
import ErrorBackdrop from "../components/errors/ErrorBackdrop";

const Catalog = () => {
  const error=useSelector((state)=>state.errorReducer);
  console.log(error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, []);
  return (
    <>
      <Header />
      <CatalogTable />
      {error&& <ErrorBackdrop message={error}/>}    </>
  );
};
export default Catalog;
