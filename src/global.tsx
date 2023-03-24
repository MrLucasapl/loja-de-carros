export interface Icar {
  year: any;
  ano: number;
  combustivel: string;
  id: number;
  imagem: string;
  km: number;
  marca: string;
  modelo: string;
  preco: number;
  usado: boolean;
}

export type TFormData = {
  search: string;
  filter: string;
  yearMin: string;
  yearMax: string;
  priceMin: string;
  priceMax: string;
  kmMin: string;
  kmMax: string;
  fuel: string;
  orderBy: string;
  asc: boolean;
  newCar: boolean;
  usedCar: boolean;
};

export interface IhandleChange {
  name: string;
  value: string | boolean;
}

export interface IheaderProps {
  copyData: Icar[];
  setCopyData: React.Dispatch<React.SetStateAction<Icar[]>>;
}

export interface OutletContextType {
  data: Icar[];
  copyData: Icar[];
  setCopyData: React.Dispatch<React.SetStateAction<Icar[]>>;
}

export interface Irender {
  copyData: any;
  setSelectedCars: React.Dispatch<React.SetStateAction<Icar[]>>;
  setContSelected: React.Dispatch<React.SetStateAction<number>>;
}

export interface CardCarProps {
  values: Icar[];
  setSelectedCars: React.Dispatch<React.SetStateAction<Icar[]>>;
  setContSelected: React.Dispatch<React.SetStateAction<number>>;
}

export interface IFildform {
  brands: JSX.Element[];
  yearMin: JSX.Element[];
  yearMax: JSX.Element[];
  fuel: JSX.Element[];
  selectedCars: Icar[];
  copyData: Icar[];
  data: Icar[];
  contSelected: number;
  setYearMax: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  setCopyData: React.Dispatch<React.SetStateAction<Icar[]>>;
}

export interface ILoadingProps {
  isLoading: boolean;
}

export interface ILoadingContext {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export interface Ibanner {
  closingTime: Date;
  copyData: Icar[];
}
