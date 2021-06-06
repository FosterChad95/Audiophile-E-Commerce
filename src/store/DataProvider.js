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

  useEffect(() => {
    sendRequest();

    return () => sendRequest();
  });

  const changeNameHandler = (input) => {
    setName(input);
  };

  const dataContextValue = {
    data,
    error,
    status,
    sendRequest,
    nameChange: changeNameHandler,
    name: name,
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
