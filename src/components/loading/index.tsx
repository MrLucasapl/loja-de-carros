import React from "react";
import { ILoadingProps } from "../../global";
import { ContainerSpinner } from "./style";

export const Loading: React.FC<ILoadingProps> = ({
  isLoading,
}: ILoadingProps) => {
  return isLoading ? (
    <ContainerSpinner>
      <div className="spinner-loading"></div>
    </ContainerSpinner>
  ) : null;
};
