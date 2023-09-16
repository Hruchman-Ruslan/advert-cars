import PropTypes from "prop-types";

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
import { CheckIcon } from "../CheckIcon/CheckIcon";

export const CarItem = ({ car, openModal, reload }) => {
  return (
    <Item key={car.id}>
      <BoxItem>
        <WrapperImg>
          <Img src={car.img || car.photoLink} alt={car.model} />
          <CheckIcon car={car} reload={reload} />
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
  reload: PropTypes.bool.isRequired,
};
