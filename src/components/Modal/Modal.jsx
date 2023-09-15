import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import {
  About,
  Backdrop,
  BoxAbout,
  BoxBuns,
  Button,
  Close,
  Decor,
  Img,
  Item,
  ItemText,
  List,
  ListBuns,
  Make,
  ModalContent,
  Model,
  RentalBox,
  RentalDecor,
  RentalItem,
  RentalList,
  RentalText,
  RentalTitle,
  TextBuns,
  TitleBuns,
  WrapperAbout,
  WrapperDecor,
  WrapperImg,
  WrapperInfo,
  WrapperTitle,
  Year,
} from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onClose, selectedCar }) => {
  console.log(selectedCar);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClose = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const formattedMileage = selectedCar.mileage.toLocaleString();

  return createPortal(
    <Backdrop onClick={handleBackdropClose}>
      <ModalContent>
        <Close onClick={onClose} />
        <WrapperImg>
          <Img
            src={selectedCar.img || selectedCar.photoLink}
            alt={selectedCar.model}
          />
        </WrapperImg>

        <BoxAbout>
          <WrapperTitle>
            <Make>{selectedCar.make}</Make>
            <Model> {selectedCar.model},</Model>
            <Year>{selectedCar.year}</Year>
          </WrapperTitle>

          <WrapperInfo>
            <List>
              <Item>
                <ItemText>{selectedCar.address}</ItemText>
              </Item>
              <Item>
                <ItemText>Id: {selectedCar.id}</ItemText>
              </Item>
              <Item>
                <ItemText>Year: {selectedCar.year}</ItemText>
              </Item>
              <Item>
                <ItemText>Type: {selectedCar.type}</ItemText>
              </Item>
              <Item>
                <ItemText>
                  Fuel Consumption: {selectedCar.fuelConsumption}
                </ItemText>
              </Item>
              <Item>
                <ItemText>Engine Size: {selectedCar.engineSize}</ItemText>
              </Item>
            </List>
          </WrapperInfo>

          <WrapperAbout>
            <About>{selectedCar.description}</About>
          </WrapperAbout>
        </BoxAbout>

        <BoxBuns>
          <TitleBuns>Accessories and functionalities:</TitleBuns>
          <ListBuns>
            {selectedCar.accessories
              .concat(selectedCar.functionalities)
              .map((item, index) => (
                <ListBuns key={index}>
                  <TextBuns>{item}</TextBuns>
                  {index <
                    selectedCar.accessories.length +
                      selectedCar.functionalities.length -
                      1 && <Decor> | </Decor>}
                </ListBuns>
              ))}
          </ListBuns>
        </BoxBuns>

        <RentalBox>
          <RentalTitle>Rental Conditions:</RentalTitle>
          <RentalList>
            {selectedCar.rentalConditions
              .split("\n")
              .map((condition, index) => (
                <RentalItem key={index}>
                  <RentalText>{condition}</RentalText>
                </RentalItem>
              ))}
            <RentalItem>
              <WrapperDecor>
                <RentalText>Mileage: </RentalText>
                <RentalDecor>{formattedMileage}</RentalDecor>
              </WrapperDecor>
            </RentalItem>
            <RentalItem>
              <WrapperDecor>
                <RentalText>Price: </RentalText>
                <RentalDecor>{selectedCar.rentalPrice}$</RentalDecor>
              </WrapperDecor>
            </RentalItem>
          </RentalList>
        </RentalBox>
        <Button href="tel:+380730000000">Rental car</Button>
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
