import React, { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";
import { getData } from "../lib/api";

export const DataContext = React.createContext({
  data: [],
  error: null,
  status: "",
  sendRequest: () => {},
  nameChange: () => {},
  name: "",
});

const DataProvider = (props) => {
  const { data, error, status, sendRequest } = useHttp(getData, false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    sendRequest();

    return () => sendRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeNameHandler = (input) => {
    setName(input);
  };

  const changeCategoryHandler = (inp) => {
    setCategory(inp);
  };

  const dataContextValue = {
    data,
    error,
    status,
    sendRequest,
    nameChange: changeNameHandler,
    name: name,
    categoryChange: changeCategoryHandler,
    category: category,
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
