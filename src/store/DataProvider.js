import React, { useEffect } from "react";
import useHttp from "../hooks/useHttp";
import { getData } from "../lib/api";

export const DataContext = React.createContext({
  data: [],
});

const DataProvider = (props) => {
  const { data, error, status, sendRequest } = useHttp(getData, false);

  useEffect(() => {
    sendRequest();

    return () => sendRequest();
  }, []);

  const dataContextValue = {
    data,
    error,
    status,
    sendRequest,
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
