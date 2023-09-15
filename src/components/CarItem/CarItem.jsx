import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import {
  Item,
  Img,
  ItemDetails,
  ListDetails,
  WrapperDetails,
  WrapperTitle,
  Make,
  Year,
  Model,
  BoxTitle,
  WrapperImg,
  Price,
  ItemText,
  Button,
  BoxItem,
} from "./CarItem.styled";
import { IconOne } from "./CarItem.styled";

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
      <BoxItem>
        <WrapperImg>
          <Img src={car.img || car.photoLink} alt={car.model} />
          <IconOne
            onClick={handleIconOneClick}
            style={{ fill: isCarSelected ? "blue" : "white" }}
          />
        </WrapperImg>

        <WrapperTitle>
          <BoxTitle>
            <Make>{car.make}</Make>
            <Model>{car.model},</Model>
            <Year>{car.year}</Year>
          </BoxTitle>
          <Price>${car.rentalPrice}</Price>
        </WrapperTitle>
        <WrapperDetails>
          <ListDetails>
            <ItemDetails>
              <ItemText>{car.address}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>{car.rentalCompany}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>{car.premium}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>{car.type}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>{car.model}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>{car.mileage}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>{car.accessories[0]}</ItemText>
            </ItemDetails>
          </ListDetails>
        </WrapperDetails>
        <Button type="button" onClick={openModal}>
          Learn more
        </Button>
      </BoxItem>
    </Item>
  );
};

CarItem.propTypes = {
  car: PropTypes.object.isRequired,
  openModal: PropTypes.func,
};
