import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import {
  Item,
  Img,
  ItemDetails,
  ListDetails,
  WrapperDetails,
  WrapperTitle,
} from "../CarList/CarList.styled";
import { IconOne } from "./CarItem.syled";

export const CarItem = ({ car, openModal }) => {
  const [isCarSelected, setIsCarSelected] = useState(false);

  useEffect(() => {
    const storedCars = JSON.parse(localStorage.getItem("selectedCars")) || [];
    const isCarAlreadySelected = storedCars.some(
      (selectedCar) => selectedCar.id === car.id
    );

    setIsCarSelected(isCarAlreadySelected);
  }, [car.id]);

  const handleIconOneClick = () => {
    const storedCars = JSON.parse(localStorage.getItem("selectedCars")) || [];
    const carIndex = storedCars.findIndex(
      (selectedCar) => selectedCar.id === car.id
    );

    if (carIndex === -1) {
      storedCars.push(car);
      localStorage.setItem("selectedCars", JSON.stringify(storedCars));
      setIsCarSelected(true);
    } else {
      storedCars.splice(carIndex, 1);
      localStorage.setItem("selectedCars", JSON.stringify(storedCars));
      setIsCarSelected(false);
    }
  };

  return (
    <Item key={car.id}>
      <Img src={car.img || car.photoLink} alt={car.model} />
      <IconOne
        onClick={handleIconOneClick}
        style={{ fill: isCarSelected ? "blue" : "white" }}
      />
      <WrapperTitle>
        <h2>
          {car.make}, {car.year}
        </h2>
        <p>${car.rentalPrice}</p>
      </WrapperTitle>
      <WrapperDetails>
        <ListDetails>
          <ItemDetails>
            <p>{car.address}</p>
          </ItemDetails>
          <ItemDetails>
            <p>{car.rentalCompany}</p>
          </ItemDetails>
          <ItemDetails>
            <p>{car.premium}</p>
          </ItemDetails>
          <ItemDetails>
            <p>{car.type}</p>
          </ItemDetails>
          <ItemDetails>
            <p>{car.model}</p>
          </ItemDetails>
          <ItemDetails>
            <p>{car.mileage}</p>
          </ItemDetails>
          <ItemDetails>
            <p>{car.accessories[0]}</p>
          </ItemDetails>
        </ListDetails>
      </WrapperDetails>
      <button type="button" onClick={openModal}>
        Click
      </button>
    </Item>
  );
};

CarItem.propTypes = {
  car: PropTypes.object.isRequired,
  openModal: PropTypes.func,
};
