import React from "react";
import { ContainerSpinner } from "./style";

interface ILoadingProps {
  isLoading: boolean;
}

export const Loading: React.FC<ILoadingProps> = ({
  isLoading,
}: ILoadingProps) => {
  return isLoading ? (
    <ContainerSpinner>
      <div className="spinner-loading"></div>
    </ContainerSpinner>
  ) : null;
};
