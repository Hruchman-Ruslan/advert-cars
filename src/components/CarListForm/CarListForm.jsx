import PropTypes from "prop-types";
import { useFormik } from "formik";
import Select from "react-select";

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
      <form onSubmit={filterForm.handleSubmit}>
        <label>
          Car brand
          <Select
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
        </label>
        <label>
          Price/ 1 hour
          <Select
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
        </label>
        <label>
          Car mileage / km
          <input
            type="number"
            name="minMileage"
            onChange={filterForm.handleChange}
            onBlur={filterForm.handleBlur}
            value={filterForm.values.minMileage}
            placeholder="From"
          />
        </label>
        <label>
          <input
            type="number"
            name="maxMileage"
            onChange={filterForm.handleChange}
            onBlur={filterForm.handleBlur}
            value={filterForm.values.maxMileage}
            placeholder="To"
          />
        </label>
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

CarListForm.propTypes = {
  brands: PropTypes.array.isRequired,
  prices: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
};
