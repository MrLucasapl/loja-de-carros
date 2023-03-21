export interface Icar {
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

export interface OutletContextType extends Iterable<any> {
  data: Icar[];
  copyData: Icar[];
  setCopyData: React.Dispatch<React.SetStateAction<Icar[]>>;
}
// @ts-ignore
OutletContextType.prototype[Symbol.iterator] = function* () {
  yield this.data;
  yield this.copyData;
  yield this.setCopyData;
};
