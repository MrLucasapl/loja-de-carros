import { Icar } from "../global";
import { accentRemover } from "../util/accentRemover";

export const filterCar = (
  search: string,
  filter: string,
  data: Icar[] | [],
  setCopyData: React.Dispatch<React.SetStateAction<[] | Icar[]>>
) => {
  if (search === "" && filter === "") {
    setCopyData(data);
  } else if (search !== "" && filter !== "") {
    switch (filter) {
      case "marca":
        setCopyData(
          data.filter((car: Icar) => {
            let marca = car.marca.toLowerCase();
            marca = accentRemover(marca);
            if (marca.includes(search)) {
              return marca;
            }
          })
        );
        break;

      case "modelo":
        setCopyData(
          data.filter((car: Icar) => {
            let modelo = car.modelo.toLowerCase();
            modelo = accentRemover(modelo);
            if (modelo.includes(search)) {
              return modelo;
            }
          })
        );
        break;

      default:
        break;
    }
  } else {
    setCopyData(
      data.filter((car: Icar) => {
        let modelo = car.modelo.toLowerCase();
        modelo = accentRemover(modelo);
        if (modelo.includes(search)) {
          return modelo;
        }
      })
    );
  }
};
