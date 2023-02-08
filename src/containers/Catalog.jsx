import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CatalogTable from "../components/catalog/CatalogTable";
import { getCars } from "../components/catalog/carActions";
import Header from "../components/header/Header";

const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, []);
  return (
    <>
      <Header />
      <CatalogTable />
    </>
  );
};
export default Catalog;
