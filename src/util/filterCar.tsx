import { Icar, TFormData } from "../global";
import { accentRemover } from "../util/accentRemover";

interface IfilterCar extends TFormData {}

export const filterCar = (
  filters: IfilterCar,
  data: Icar[] | [],
  setCopyData: React.Dispatch<React.SetStateAction<[] | Icar[]>>
) => {
  const normalizedSearch = accentRemover(filters.search.toLowerCase());
  const normalizedFilter = accentRemover(filters.filter.toLowerCase());
  const normalizedYearMin = accentRemover(filters.yearMin.toLowerCase());
  const normalizedYearMax = accentRemover(filters.yearMax.toLowerCase());
  const normalizedPriceMin = accentRemover(filters.priceMin.toLowerCase());
  const normalizedPriceMax = accentRemover(filters.priceMax.toLowerCase());
  const normalizedkmMin = accentRemover(filters.kmMin.toLowerCase());
  const normalizedkmMax = accentRemover(filters.kmMax.toLowerCase());
  const normalizedFuel = accentRemover(filters.fuel.toLowerCase());
  const normalizedOrderBy = accentRemover(filters.orderBy.toLowerCase());
  
  const hasFilters =
    filters.search !== "" ||
    filters.filter !== "" ||
    filters.yearMin !== "" ||
    filters.yearMax !== "" ||
    filters.priceMin !== "" ||
    filters.priceMax !== "" ||
    filters.kmMin !== "" ||
    filters.kmMax !== "" ||
    filters.fuel !== "" ||
    filters.orderBy !== "" ||
    filters.asc !== false ||
    filters.usedCar !== false ||
    filters.newCar !== false;

  if (!hasFilters) {
    setCopyData(data);
    return;
  }

  let filteredData = data.filter((car: Icar) => {
    const normalizedItem = accentRemover(car.modelo.toLowerCase());
    return normalizedItem.includes(normalizedSearch);
  });

  if (filters.filter !== "") {
    filteredData = filteredData.filter((car) => {
      const normalizedItem = accentRemover(car.marca.toLowerCase());
      return normalizedItem.includes(normalizedFilter);
    });
  }

  if (filters.yearMin !== "") {
    filteredData = filteredData.filter((car) => {
      return car.ano >= parseInt(normalizedYearMin);
    });
  }

  if (filters.yearMax !== "") {
    filteredData = filteredData.filter((car) => {
      return car.ano <= parseInt(normalizedYearMax);
    });
  }

  if (filters.priceMin !== "") {
    filteredData = filteredData.filter((car) => {
      return car.preco >= parseInt(normalizedPriceMin);
    });
  }

  if (filters.priceMax !== "") {
    filteredData = filteredData.filter((car) => {
      return car.preco <= parseInt(normalizedPriceMax);
    });
  }

  if (filters.kmMin !== "") {
    filteredData = filteredData.filter((car) => {
      return car.km >= parseInt(normalizedkmMin);
    });
  }

  if (filters.kmMax !== "") {
    filteredData = filteredData.filter((car) => {
      return car.km <= parseInt(normalizedkmMax);
    });
  }

  if (filters.fuel !== "") {
    filteredData = filteredData.filter((car) => {
      const normalizedItem = accentRemover(car.combustivel.toLowerCase());
      return normalizedItem.includes(normalizedFuel);
    });
  }

  if (filters.newCar) {
    filteredData = filteredData.filter((car) => {
      return car.usado === false;
    });
  }

  if (filters.usedCar) {
    filteredData = filteredData.filter((car) => {
      return car.usado !== false;
    });
  }

  if (filters.asc) {
    switch (normalizedOrderBy) {
      case "ano":
        setCopyData(filteredData.sort((a, b) => a.ano - b.ano));
        break;
      case "preco":
        setCopyData(filteredData.sort((a, b) => a.preco - b.preco));
        break;
      case "marca":
        setCopyData(
          filteredData.sort((a, b) => {
            let x = a.marca.toLowerCase();
            let z = b.marca.toLowerCase();
            return x == z ? 0 : x > z ? 1 : -1;
          })
        );
        break;
      case "modelo":
        setCopyData(
          filteredData.sort((a, b) => {
            let x = a.modelo.toLowerCase();
            let z = b.modelo.toLowerCase();
            return x == z ? 0 : x > z ? 1 : -1;
          })
        );
        break;
      case "quilometragem":
        setCopyData(filteredData.sort((a, b) => a.km - b.km));
        break;

      default:
        break;
    }
  }

  if (filters.des) {
    switch (normalizedOrderBy) {
      case "ano":
        setCopyData(filteredData.sort((a, b) => b.ano - a.ano));
        break;
      case "preco":
        setCopyData(filteredData.sort((a, b) => b.preco - a.preco));
        break;
      case "marca":
        setCopyData(
          filteredData.sort((a, b) => {
            let x = a.marca.toLowerCase();
            let z = b.marca.toLowerCase();
            return x == z ? 0 : x < z ? 1 : -1;
          })
        );
        break;
      case "modelo":
        setCopyData(
          filteredData.sort((a, b) => {
            let x = a.modelo.toLowerCase();
            let z = b.modelo.toLowerCase();
            return x == z ? 0 : x < z ? 1 : -1;
          })
        );
        break;
      case "quilometragem":
        setCopyData(filteredData.sort((a, b) => b.km - a.km));
        break;

      default:
        break;
    }
  }

  setCopyData(filteredData);
};
