import PropTypes from "prop-types";
import { useFormik } from "formik";
import {
  Button,
  Form,
  Input,
  Label,
  SelectStyles,
  Test,
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

  const selectStyles = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen
        ? "rotate(180deg)"
        : "rotate(0deg)",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#121417",
    }),
  };

  const brandOptions = brands.map((brand) => ({
    value: brand,
    label: brand,
  }));

  const priceOptions = prices.map((price) => ({
    value: price,
    label: price,
  }));

  return (
    <div>
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
            styles={selectStyles}
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
            styles={selectStyles}
          />
        </Label>
        <Test>
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
        </Test>
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};

CarListForm.propTypes = {
  brands: PropTypes.array.isRequired,
  prices: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
};
