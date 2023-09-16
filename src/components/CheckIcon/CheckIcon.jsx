import { useEffect, useState } from "react";
import { IconOne, IconTwo } from "../CheckIcon/CheckIcon.styled";
import PropTypes from "prop-types";

export const CheckIcon = ({ car, reload }) => {
  const [isCarSelected, setIsCarSelected] = useState(false);

  useEffect(() => {
    const storedCars = JSON.parse(localStorage.getItem("Cars")) || [];
    const isCarAlreadySelected = storedCars.some(
      (selectedCar) => selectedCar.id === car.id
    );

    setIsCarSelected(isCarAlreadySelected);
  }, [car.id]);

  const handleIconOneClick = () => {
    const storedCars = JSON.parse(localStorage.getItem("Cars")) || [];
    const carIndex = storedCars.findIndex(
      (selectedCar) => selectedCar.id === car.id
    );

    if (carIndex === -1) {
      storedCars.push(car);
      localStorage.setItem("Cars", JSON.stringify(storedCars));
      setIsCarSelected(true);
    } else {
      storedCars.splice(carIndex, 1);
      localStorage.setItem("Cars", JSON.stringify(storedCars));
      setIsCarSelected(false);
      if (reload) {
        window.location.reload();
      }
    }
  };

  return (
    <>
      {!isCarSelected ? (
        <IconTwo onClick={handleIconOneClick} />
      ) : (
        <IconOne onClick={handleIconOneClick} />
      )}
    </>
  );
};

CheckIcon.propTypes = {
  car: PropTypes.object.isRequired,
  reload: PropTypes.bool,
};
