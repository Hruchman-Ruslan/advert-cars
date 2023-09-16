import PropTypes from "prop-types";
import { useFormik } from "formik";
import {
  Button,
  Form,
  Input,
  Label,
  SelectStyles,
  WrapperInput,
  SelectedStyled,
} from "./CarListForm.styled";

export const CarListForm = ({ brands, prices, onFilter }) => {
  const initialValues = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  };

  const filterForm = useFormik({
    initialValues,

    onSubmit: (values) => {
      onFilter(values);
    },
  });

  const brandOptions = brands.map((brand) => ({
    value: brand,
    label: brand,
  }));

  const priceOptions = prices.map((price) => ({
    value: price,
    label: price,
  }));

  return (
    <Form onSubmit={filterForm.handleSubmit}>
      <Label>
        Car brand
        <SelectStyles
          name="brand"
          onChange={(selectedOption) =>
            filterForm.setFieldValue("brand", selectedOption.value)
          }
          onBlur={filterForm.handleBlur}
          value={brandOptions.find(
            (option) => option.value === filterForm.values.brand
          )}
          options={brandOptions}
          placeholder="Enter the text"
          styles={SelectedStyled}
        />
      </Label>
      <Label>
        Price/ 1 hour
        <SelectStyles
          name="rentalPrice"
          onChange={(selectedOption) =>
            filterForm.setFieldValue("rentalPrice", selectedOption.value)
          }
          onBlur={filterForm.handleBlur}
          value={priceOptions.find(
            (option) => option.value === filterForm.values.rentalPrice
          )}
          options={priceOptions}
          placeholder="To $"
          styles={SelectedStyled}
        />
      </Label>
      <WrapperInput>
        <Label>
          Car mileage / km
          <Input
            type="number"
            name="minMileage"
            onChange={filterForm.handleChange}
            onBlur={filterForm.handleBlur}
            value={filterForm.values.minMileage}
            placeholder="From"
          />
        </Label>
        <Label>
          <Input
            type="number"
            name="maxMileage"
            onChange={filterForm.handleChange}
            onBlur={filterForm.handleBlur}
            value={filterForm.values.maxMileage}
            placeholder="To"
          />
        </Label>
      </WrapperInput>
      <Button type="submit">Search</Button>
    </Form>
  );
};

CarListForm.propTypes = {
  brands: PropTypes.array.isRequired,
  prices: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
};
