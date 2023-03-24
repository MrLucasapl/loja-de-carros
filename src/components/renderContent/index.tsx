import { Irender } from "../../global";
import Banner from "../banner";
import CardCar from "../cardCar";

const RenderContext = ({
  copyData,
  selectedCars,
  setSelectedCars,
}: Irender) => {
  const closingTime = new Date();
  closingTime.setHours(closingTime.getHours() + 3);

  if (copyData.length > 0) {
    return (
      <div className="box-cards">
        <CardCar
          values={copyData}
          selectedCars={selectedCars}
          setSelectedCars={setSelectedCars}
        />
        <Banner closingTime={closingTime} copyData={copyData} />
      </div>
    );
  } else {
    return <strong className="erro">Nenhum Carro Encontrado!</strong>;
  }
};

export default RenderContext;
