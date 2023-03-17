import React from "react";
import { Routes } from "react-router-dom";
import { Loading } from "../components/loading";

interface ILoadingContext {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const LoadingContext = React.createContext<ILoadingContext>({
  isLoading: false,
  setLoading: () => {},
});

interface ILoadingProviderProps extends React.PropsWithChildren<{}> {}

export const LoadingProvider: React.FC<ILoadingProviderProps> = ({
  children,
  ...rest
}) => {
  const [isLoading, setLoading] = React.useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      <Loading isLoading={isLoading} />
      <Routes {...rest}>{children}</Routes>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const { isLoading, setLoading } = React.useContext(LoadingContext);
  return { isLoading, setLoading };
};